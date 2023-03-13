import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  
  constructor(
    private api: HttpClient
  ) { 
    this.form = new FormGroup({
      fullname: new FormControl('',Validators.required),
      email: new FormControl('', Validators.required),
      education: new FormControl('',Validators.required),
    })
  }

  ngOnInit(): void {
    this.getDataPersonal()
  }

  data : any = []
  loading : boolean = false
  getDataPersonal(){
    this.loading = true
    this.api.get('http://localhost:8000/api/personal-data').subscribe((response)=>{
      this.data = response['data']
      this.loading = false
    },(error:any)=>{
      console.log(error.message)
      this.loading = false
    })
  }

  form : FormGroup;

  text: string = 'Send'
  submit(){
    if(this.form.valid){
      this.text = 'Sending...'
      this.api.post('http://localhost:8000/api/sendData',this.form.value)
      .subscribe((response)=> {
        this.text = 'Send'
        this.getDataPersonal()
      },(error:any)=>{
        alert(JSON.stringify(error.message))
        this.text = 'Send'
      })  
    }
    else{
      alert("Wajib di isi")
    }
  }

  delete(id){
    let isConfirmed = confirm('Are you sure')
    if(isConfirmed) {
      this.loading = true
      this.api.delete('http://localhost:8000/api/delete/'+id).subscribe((response)=> {
        if(response['status'] == true){
          alert(response['message']);
          this.getDataPersonal()
          this.loading = false
        }
        else{
          alert(response['message']);
          this.loading = false
        }
      },(error:any)=>{
        alert(error.message)
        this.loading = false
      })  
    }
  }

  formDataEdit : FormGroup = new FormGroup({
    fullname: new FormControl('',Validators.required),
    email: new FormControl('', Validators.required),
    education: new FormControl('',Validators.required),
  })

  dataId : number
  edit(data:any){
    this.dataId = data.id
    this.isModal = true;

    this.formDataEdit.setValue({
      fullname: data.fullname,
      email: data.email,
      education: data.education
    })
  }

  isModal : boolean = false
  close(){
    this.isModal = false;
  }

  update(){
    var data = {
      id: this.dataId,
      fullname: this.formDataEdit.value.fullname,
      email: this.formDataEdit.value.email,
      education: this.formDataEdit.value.education,
    }
    this.api.post('http://localhost:8000/api/update',data).subscribe((response) => {
      if(response['status'] === true){
        alert(response['message'])
      }
      else{
        alert(response['message'])
      }
      this.isModal = false
      this.getDataPersonal()
    },(error:any)=>{
      alert(error.message)
    })

  }

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './family/family.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
  {
    path: 'personal',
    component: PersonalComponent,
  },
  {
    path: 'family',
    component: FamilyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

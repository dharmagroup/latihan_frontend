import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';


@NgModule({
  declarations: [HeaderComponent, NavigationComponent, FooterComponent, AuthComponent, AdminLayoutComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class LayoutModule { }

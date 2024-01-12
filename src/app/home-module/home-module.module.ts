import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [
    MainHomepageComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,NgOtpInputModule,FormsModule, ReactiveFormsModule
  ],
  exports:[
    SidenavComponent
  ]
  
})
export class HomeModuleModule { }

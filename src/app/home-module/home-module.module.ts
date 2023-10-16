import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainHomepageComponent
  ],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,NgOtpInputModule,FormsModule, ReactiveFormsModule
  ]
})
export class HomeModuleModule { }

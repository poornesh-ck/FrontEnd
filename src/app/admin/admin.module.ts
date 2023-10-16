import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageModuleRoutingModule } from './user-page-module-routing.module';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UsagePageComponent } from './usage-page/usage-page.component';
import { UserPlansComponent } from './user-plans/user-plans.component';
import { PhonecallComponent } from './phonecall/phonecall.component';
import { DataUsageComponent } from './data-usage/data-usage.component';



@NgModule({
  declarations: [
    UserHomepageComponent,
    UserNavbarComponent,
    PaymentpageComponent,
    UserProfileComponent,
    UserNotificationComponent,
    UsagePageComponent,
    UserPlansComponent,
    PhonecallComponent,
    DataUsageComponent,
    
  ],
  imports: [
    CommonModule,
    UserPageModuleRoutingModule
  ]
})
export class UserPageModuleModule { }

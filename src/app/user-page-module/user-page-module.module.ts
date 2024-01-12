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
import { BillsummaryComponent } from './billsummary/billsummary.component';
import { PreBillStatComponent } from './pre-bill-stat/pre-bill-stat.component';
import { FormsModule } from '@angular/forms';
import { MessagingUsageComponent } from './messaging-usage/messaging-usage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { SidenavComponent } from '../home-module/sidenav/sidenav.component';



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
    BillsummaryComponent,
    PreBillStatComponent,
    MessagingUsageComponent,
    ContactUsComponent,
    SidenavbarComponent
    
  ],
  imports: [
    CommonModule,
    UserPageModuleRoutingModule,FormsModule
  ],
  exports:[
    UserNavbarComponent,SidenavbarComponent

  ]
})
export class UserPageModuleModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from '../home-module/main-homepage/main-homepage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UserPlansComponent } from './user-plans/user-plans.component';
import { UsagePageComponent } from './usage-page/usage-page.component';
import { AddUserComponent } from '../admin/add-user/add-user.component';
import { PhonecallComponent } from './phonecall/phonecall.component';
import { DataUsageComponent } from './data-usage/data-usage.component';
import { BillsummaryComponent } from './billsummary/billsummary.component';
import { PreBillStatComponent } from './pre-bill-stat/pre-bill-stat.component';
import { MessagingUsageComponent } from './messaging-usage/messaging-usage.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  {
    path:'mainpage',
    component:MainHomepageComponent
  },
  {
    path:'Payment',
    component:PaymentpageComponent
  },
  {
    path:'profile',
    component:UserProfileComponent
  },
  {
    path:'home',
    component:UserHomepageComponent
  },{
    path:'Notifications',
    component:UserNotificationComponent
  },{
    path:'plans',
    component:UserPlansComponent

  },{
    path:'usage',
    component:UsagePageComponent
  },{
    path:'admin1',
    component:AddUserComponent
  },{
    path:'phonecall',
    component:PhonecallComponent
  }
  ,{
    path:'dataUsage',
    component:DataUsageComponent
  },{
    path:'paymentsummary',
    component:BillsummaryComponent
  },{
    path:'prebill',
    component:PreBillStatComponent}
  ,{
    path:'message',
    component:MessagingUsageComponent
  },{
    path:'contactus',
    component:ContactUsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageModuleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFeedBackComponent } from './view-feed-back/view-feed-back.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {
    path:'FeedBack',
    component:ViewFeedBackComponent
  },{
    path:'adminregister',
    component:AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

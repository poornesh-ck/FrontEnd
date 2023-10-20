import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFeedBackComponent } from './view-feed-back/view-feed-back.component';

const routes: Routes = [
  {
    path:'FeedBack',
    component:ViewFeedBackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

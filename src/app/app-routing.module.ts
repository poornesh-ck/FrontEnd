import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomepageComponent } from './home-module/main-homepage/main-homepage.component';

const routes: Routes = [
  {
    path:'',
    component:MainHomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

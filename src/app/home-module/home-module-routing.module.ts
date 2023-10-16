import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomepageComponent } from '../user-page-module/user-homepage/user-homepage.component';
import { MainHomepageComponent } from './main-homepage/main-homepage.component';

const routes: Routes = [{

  path:'Userpage',
  component:UserHomepageComponent
},
{path:'main_homepage',component:MainHomepageComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }

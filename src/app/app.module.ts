import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModuleModule } from './home-module/home-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPageModuleModule } from './user-page-module/user-page-module.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModuleModule,
    BrowserAnimationsModule,
    UserPageModuleModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

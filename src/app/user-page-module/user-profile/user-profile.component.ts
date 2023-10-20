import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  constructor(private userv:UserServiceService){
    this.user=userv.getFromSession()
  this.mobileno=this.user.mobileno


  }
  user:any
  mobileno:number

}

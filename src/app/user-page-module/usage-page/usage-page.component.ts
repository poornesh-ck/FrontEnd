import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage-page.component.html',
  styleUrls: ['./usage-page.component.css']
})
export class UsagePageComponent {
  constructor(userv:UserServiceService){
    this.userdetails=userv.getFromSession()
   userv.getcallDetails(this.userdetails.mobileno).subscribe((data) => {
      this.user = data;
      // this.user.addToSession(this.user)
      // sessionStorage.setItem('userData', JSON.stringify(this.user));
       console.log(this.user); 
      // console.log(this.user.fname)
    });

  }
  
  userdetails:any
  user:any;
 

}

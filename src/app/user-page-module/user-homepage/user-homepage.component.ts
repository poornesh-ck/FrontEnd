import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent  {
  constructor(private userService: UserServiceService){
    this.user=userService.getFromSession()
    this.plan=this.user.plans
  
   

  }
  plan:string
  user: any;
 
  // getUserDetails() {
  //   const mobileNo = 123456789; // Replace with the actual mobileNo you want to query
  //   this.userService.getUserDetails(mobileNo).subscribe((data) => {
  //     this.user = data;
  //     console.log(this.user); 
  //   });
  // }
  // ngOnInit(): void {
  
    
  // }


}

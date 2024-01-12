import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
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
    this.paymentstatus=this.user.paymentstatus
    this.mobno=this.user.mobileno
    this.userService.getUseDetails(this.mobno).subscribe((data) => {
      this.datavalue = data;
      console.log(this.datavalue.dataleft)
   
    });
   

    if(this.paymentstatus=='paid'){
  
      this.value=true
      console.log(this.value)
    }else{
      this.value=false
    }

  }
  paymentstatus:any
  mobno:number
  plan:string
  user: any;
  datavalue:any
  value:any
  
  

  
 
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

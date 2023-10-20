import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-pre-bill-stat',
  templateUrl: './pre-bill-stat.component.html',
  styleUrls: ['./pre-bill-stat.component.css']
})
export class PreBillStatComponent {
 constructor(userve:UserServiceService){
  this.user=userve.getFromSession()
  this.mobNo=this.user.mobileno
  this.paymentStatus=this.user.paymentstatus
  userve.getBillDetails(this.mobNo).subscribe((data) => {
    this.bill = data;
    console.log(this.bill)
    


  });
  console.log(this.bill)
  if(this.paymentStatus=='paid'){
  
    this.value=true
    console.log(this.value)
  }else{
    this.value=false
  }
 }

 
 user:any
 mobNo:number
 bill:any
 value:any
 paymentStatus:any
}

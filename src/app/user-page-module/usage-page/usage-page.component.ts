import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage-page.component.html',
  styleUrls: ['./usage-page.component.css']
})
export class UsagePageComponent {
  constructor(userv:UserServiceService){
  
  userv.readCsv().subscribe((msg:any[])=>{
    this.csvCall=msg
    console.log(msg);
    
    
  })
  userv.readDataCsv().subscribe((msg:any[])=>{
    this.csvData=msg
    console.log(msg);

  })

    this.userdetails=userv.getFromSession()
   userv.getcallDetails(this.userdetails.mobileno).subscribe((data) => {
      this.user = data;
      // this.user.addToSession(this.user)
      // sessionStorage.setItem('userData', JSON.stringify(this.user));

       console.log(this.user); 
      // console.log(this.user.fname)
    });
    userv.getdataUtilHistory(this.userdetails.mobileno).subscribe((data) =>{
      this.dataUtil=data
      console.log(this.dataUtil); 


    })
    userv.MessageDetails(this.userdetails.mobileno).subscribe((data) =>{
      this.MessageUtil=data
      console.log(this.MessageUtil); 


    })

  }
  
  userdetails:any
  user:any;
  dataUtil:any
  MessageUtil:any
  dataTab:boolean=true
  callTab!:boolean
  msgTab!:boolean
  csvCall:any
  csvData:any
    data(){
    this.dataTab=true
    this.callTab=false
    this.msgTab=false
  }
  call(){
    this.dataTab=false
    this.callTab=true
    this.msgTab=false
  }
  msg(){
    this.dataTab=false
    this.callTab=false
    this.msgTab=true
  }

 
 

}

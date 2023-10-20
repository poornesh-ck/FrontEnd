import { Component } from '@angular/core';
import { CallsDet } from 'src/app/modal/CallsDet';
// import {  CallsDet } from 'src/app/modal/CallsDet';

import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-phonecall',
  templateUrl: './phonecall.component.html',
  styleUrls: ['./phonecall.component.css']
})
export class PhonecallComponent {
  userMobNo:number;
  constructor(private userService: UserServiceService){
    console.log("ths is from tbe phonecall construct");
    
    this.user=userService.getFromSession()
    this.mobNo=this.user.mobileno
    console.log(this.mobNo);
    
    this.userMobNo=this.mobNo
    // console.log(this.CallsDet+"this is from the construr");

  }
  currentTime: any;
  key=false
  st:any
  mobNo:number
  user: any;
  pickedNumbers: string = '';
  callstatus:any
 
  buttonNumbers = [
    [1, '-'],
    [2, 'ABC'],
    [3, 'DEF'],
    [4, 'GHI'],
    [5, 'JKL'],
    [6, 'MNO'],
    [7, 'PQRS'],
    [8, 'TUV'],
    [9, 'WXYZ'],
    ['*', ''],
    [0, ''],
    ['#', ''],
  ];
  callingDuration!: number ; // Initial duration is 0 seconds
timer: any; // Store the timer ID


  addNumbers(numbers: any): void {
    this.pickedNumbers += numbers;
  }

  deleteLastNumber(): void {
    this.pickedNumbers = this.pickedNumbers.slice(0, -1);
  }
  

  call(): void {
    this.callstatus='on Going'
    this.callingDuration=0.0
    this.key=true
    this.timer = setInterval(() => {
      this.timer += 1; // Increase the duration by 1 second
    }, 1000);
    console.log('Calling ' + this.pickedNumbers);
  }
  formatTimer(){

    const minutes:string=Math.floor(this.timer/60).toString().padStart(2,'0');

    const seconds:string=(this.timer%60).toString().padStart(2,'0');

    return minutes+':'+seconds;

  }
  CallsDet:CallsDet=new CallsDet(0,0,'',this.setCurrentTime())
  setCurrentTime():string{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;

  }
  endCall(): void {
    this.callstatus='Call ended'
    this.CallsDet.mobileno=this.userMobNo;
    this.key=false
    this.currentTime = new Date();
    this.CallsDet.dialedno=parseInt(this.pickedNumbers, 10);
    this.CallsDet.duration=this.timer
    // this.CallsDet.time=this.currentTime
    console.log("this is from the calls det"+this.CallsDet)
    clearInterval(this.timer);
    this.userService.addcalls(this.CallsDet).subscribe((msg)=>{this.st=msg})
    this.callingDuration ;
    console.log('Call Ended');
    this.pickedNumbers = '';
  }
 
  
  
 
  
  

  
  

}

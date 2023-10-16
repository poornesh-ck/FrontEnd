import { Component } from '@angular/core';
import { CallDetails } from 'src/app/modal/CallDetails';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-phonecall',
  templateUrl: './phonecall.component.html',
  styleUrls: ['./phonecall.component.css']
})
export class PhonecallComponent {
  constructor(private userService: UserServiceService){
    this.user=userService.getFromSession()
    this.mobNo=this.user.mobileno
    this.cDetails.mobileno=this.user.mobileno
    
  
   

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
    // You can add call functionality here.
    this.timer = setInterval(() => {
      this.callingDuration += 1; // Increase the duration by 1 second
    }, 1000);
    console.log('Calling ' + this.pickedNumbers);
  }
  cDetails:CallDetails=new CallDetails(0,0,'',new Date());
 
  endCall(): void {
    this.callstatus='Call ended'
    this.key=false
    this.currentTime = new Date();
    // You can add end call functionality here.
    this.cDetails.dialedno=parseInt(this.pickedNumbers, 10);
    this.cDetails.duration=this.callingDuration.toString()
    this.cDetails.time=this.currentTime
    clearInterval(this.timer);
    this.userService.addcalls(this.cDetails).subscribe((msg)=>{this.st=msg})
    console.log(this.cDetails)
    this.callingDuration ;
    console.log('Call Ended');
    this.pickedNumbers = '';
  }
 
  
  
 
  
  

  
  

}

import { Component } from '@angular/core';
import { MessageUtil } from 'src/app/modal/message';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-messaging-usage',
  templateUrl: './messaging-usage.component.html',
  styleUrls: ['./messaging-usage.component.css']
})
export class MessagingUsageComponent {
  constructor(public userv:UserServiceService){
    this.date=new Date()
    this.time=this.setCurrentTime()
   
    this.user=userv.getFromSession()
    this.mobNo=this.user.mobileno
    this.message.mobileno=this.mobNo

  
    

  }
  date:Date
  time:string
  user:any
  mobNo:number
  receverNo:any
  messageBody:any
  message:MessageUtil=new MessageUtil(0,new Date(),'','',false,0)
  st:any

  setCurrentTime():string{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;


  }
  onClick(){
    this.message.date=new Date("2023-10-21")
    this.message.mobileno=this.mobNo
    this.message.recieverno=this.receverNo
    this.message.time=this.time
    this.message.messageSent=true
    this.message.messageBody=this.messageBody
    this.userv.messageUtil(this.message).subscribe((msg)=>{this.st=msg})
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Message Sent Successfully',
      showConfirmButton: false,
      timer: 1500
    })

  }


}

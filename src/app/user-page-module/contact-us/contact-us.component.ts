import { Component } from '@angular/core';
import { FeedBack } from 'src/app/modal/Feedback';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  constructor(private userv:UserServiceService){

  }
  name:any
  phoneno:any
  email:any
  message:any
  feedback:FeedBack=new FeedBack('',0,'','')
  st:any
  onclick(){
    this.feedback.name=this.name
    this.feedback.phoneno=this.phoneno
    this.feedback.email=this.email
    this.feedback.message=this.message
    this.userv.feedback(this.feedback).subscribe((msg)=>{this.st=msg})
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'FeedBack Sent',
      showConfirmButton: false,
      timer: 1500
    })
  }

}

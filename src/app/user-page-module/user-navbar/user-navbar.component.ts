import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from 'src/app/modal/notification';
import { UserServiceService } from 'src/app/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {

constructor(private route:Router,private userv:UserServiceService){
  this.user=userv.getFromSession()
  this.mobileno=this.user.mobileno
  console.log(this.mobileno)
  this.checkPercentage(this.user.dataleft,this.user.data)
  this.nofication.mobileno=this.mobileno
}
user:any
mobileno:any
notication:boolean=false
percentage:any
st:any
  signOut(){
    sessionStorage.removeItem("userData");
    this.route.navigate(['/mainpage']);
  }

  updatecycyle(){
    this.userv.updateCycle(this.mobileno).subscribe()
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Cycle Updated',
      showConfirmButton: false,
      timer: 1500
    })
  }
  onclickNotification(){
    this.notication = !this.notication;
    // userve.getbillHistory(this.mobNo).subscribe((data) =>{
    //   this.billhistory=data
    //   console.log(this.billhistory); 


    // })
    this.userv.getNotification(this.mobileno).subscribe((data) =>{
      this.notifyData=data
      console.log(this.notifyData)
    })
  
  }
  notifyData:any

  value=true
  nofication:Notification=new Notification('',0,'','');

  checkPercentage(number: number, total: number){
    this.percentage=this.calculatePercentage(number, total)
    if(this.percentage>=50){
      console.log(this.percentage+'data 50')
      this.nofication.alert='Data Usage Warning'
      this.nofication.notificationName='50%'
      this.nofication.message='You have Consumed to 50% of your data'
      this.nofication.mobileno=this.mobileno
      console.log(this.nofication)
      this.userv.notificationpush(this.nofication).subscribe((msg)=>{this.st=msg})


    }
    else if(this.percentage==90){
      console.log(this.percentage+'data 90')
      this.nofication.alert='Data Usage Warning'
      this.nofication.notificationName='90%'
      this.nofication.message='You have Consumed to 90% of your data'
      this.nofication.mobileno=this.mobileno
      console.log(this.nofication)
      this.userv.notificationpush(this.nofication).subscribe((msg)=>{this.st=msg})

    }
    else if(this.percentage==100){
      console.log(this.percentage+'data 100')
      this.nofication.alert='Data Usage Warning'
      this.nofication.notificationName='100%'
      this.nofication.message='You have Consumed to 100% of your data'
      this.nofication.mobileno=this.mobileno
      console.log(this.nofication)
      this.userv.notificationpush(this.nofication).subscribe((msg)=>{this.st=msg})

    }
    else{
      console.log(this.percentage+'datanot')
      
    }
  }

  calculatePercentage(number: number, total: number): number {
    if (total <= 0) {
      throw new Error("Total must be greater than zero");
    }
    const no= (number / total) * 100;
    return 100-no;
  }

onDeleteNotification(msg:any){
  this.userv.deleteNotification(msg.nid).subscribe();
}

}


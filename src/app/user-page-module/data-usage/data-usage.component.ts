import { Component } from '@angular/core';
import { DataUtilization } from 'src/app/modal/DataUtilization';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-data-usage',
  templateUrl: './data-usage.component.html',
  styleUrls: ['./data-usage.component.css']
})
export class DataUsageComponent {
  constructor(public userv:UserServiceService){
    this.date=new Date()
    this.time=this.setCurrentTime()
    this.data=0
    this.type='Mb'
    this.user=userv.getFromSession()
    this.mobNo=this.user.mobileno
    this.datautil.mobileno=this.mobNo

  
    

  }
  date:any
  time:any
  data:any
  type:any
  user:any
  mobNo:number
  st:any
  datautil :DataUtilization=new DataUtilization(0,new Date(),'',0,'')
  
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
    this.datautil.date=this.date
    this.datautil.data=this.data
    this.datautil.time=this.time
    this.datautil.type=this.type
    this.userv.dataUtilization(this.datautil).subscribe((msg)=>{this.st=msg})

    console.log(this.date)
    console.log(this.time);
    console.log(this.data);
    console.log(this.type)
    console.log(this.datautil.mobileno)
    
  }
  

}

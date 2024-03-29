import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';
import { Status } from 'src/app/modal/Status';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  UserForm:FormGroup
  fname:FormControl
  lname:FormControl
  mobileno:FormControl
  email:FormControl
  address:FormControl
  city:FormControl
  state:FormControl
  zip:FormControl
  service:FormControl
  dob:FormControl
  plans:FormControl
  st:any
  constructor(public pserv:AdminServiceService,public router:Router){
    this.fname=new FormControl('',[Validators.required])
    this.lname=new FormControl('',[Validators.required])
    this.mobileno=new FormControl('',[Validators.required])
    this.email=new FormControl('',[Validators.required])
    this.address=new FormControl('',[Validators.required])
    this.city=new FormControl('',[Validators.required])
    this.state=new FormControl('',[Validators.required])
    this.zip=new FormControl('',[Validators.required])
    this.service=new FormControl('',[Validators.required])
    this.dob=new FormControl('',[Validators.required])
    this.plans=new FormControl('',[Validators.required])





    
    this.UserForm=new FormGroup({fname:this.fname,lname:this.lname,mobileno:this.mobileno,email:this.email,address:this.address,city:this.city,state:this.state,zip:this.zip,service:this.service,dob:this.dob,plans:this.plans})

  }
  load:boolean=false
  submit(){
    console.log(this.UserForm.value)
    this.pserv.addUser(this.UserForm.value).subscribe((msg)=>{this.st=msg})
    this.load=true
    timer(4000).subscribe(()=>{
    console.log(this.st.status)
    console.log("waiting 7000");
    this.load=false
    if(this.st.status=='created'){
      Swal.fire(
        'Registration Successful!',
       
        'success'
      ).then(()=>{this.router.navigate(["/main_homepage"])})
      // timer(1000).subscribe(()=>{


      // })

    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })

    }
    


    })

  }



}

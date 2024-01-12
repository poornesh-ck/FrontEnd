import { Component,ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';
import { NgOtpInputConfig } from 'ng-otp-input';
import { FormControl, Validators } from '@angular/forms';
import { AdminServiceService } from 'src/app/admin/admin-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { OtpRequest } from 'src/app/modal/OtpRequest';
import { Status } from 'src/app/modal/Status';
import { timer } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-homepage',
  templateUrl: './main-homepage.component.html',
  styleUrls: ['./main-homepage.component.css']
})
export class MainHomepageComponent {
  // PhoneNumber validation (FormControl)
  phnNo : FormControl;
  accNo: FormControl
  constructor(private el: ElementRef, private renderer: Renderer2,public userv:UserServiceService,public router:Router)
   {this.phnNo=new  FormControl('',[Validators.required, Validators.maxLength(10),
    Validators.pattern('^[6-9][0-9]*$'),
    Validators.minLength(10)]),this.accNo=new  FormControl('',[Validators.required]);}
  
  ngAfterViewInit() {
    const sign_in_btn = this.el.nativeElement.querySelector('#sign-in-btn');
    const sign_up_btn = this.el.nativeElement.querySelector('#sign-up-btn');
    const container = this.el.nativeElement.querySelector('.container');

    sign_up_btn.addEventListener('click', () => {
      this.renderer.addClass(container, 'sign-up-mode');
    });

    sign_in_btn.addEventListener('click', () => {
      this.renderer.removeClass(container, 'sign-up-mode');
    });
  }


  



  // otp------>
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between'
  }
  onOtpChange(event: any) {
    this.otp = event;
    if(this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if(this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';
    }
 
    // if(this.classbtn){
   

    // }
  }
  Otp=false
  
  
  optPage(){
    this.Otp=true;
   
    
  }

  // Registration
  st:any
  displayInvalid:any
  classbtn:any
  optPageRegister(){
    this.load=true
    // this.Otp=true;
   
    console.log(this.Otp)
    console.log(this.accNo.value)
    this.userv.getOtp(this.accNo.value).subscribe((msg:Status)=>{this.st=msg.status}
    )
    timer(9000).subscribe(()=>{
    this.load=false
    console.log(this.st);
    if(this.st=='Deliverd'){
      this.optPage()
    }
    else{
      this.displayInvalid="Invalid Account Number"
      
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'Invalid Account No',
      //   footer: '<a href="">Why do I have this issue?</a>'
      // })

    }
  
  })
    
    
    

  }
  // validation registration
  validate(){
    this.load=true
    console.log(this.accNo.value)
    console.log(this.otp)
    this.userv.validateOtp(this.otp).subscribe((msg)=>{this.st = msg.status})

    timer(9000).subscribe(()=>{
    this.load=false
      
      console.log(this.st);
      if(this.st=='Otp valid'){
        Swal.fire(
          'Good job!',
          'Sucessful registration',
          'success'
        ).then(()=>{this.router.navigate(["/main_homepage"])})
        timer(1000).subscribe(()=>{


        })
      }
      else{
      
           this.inputDigitLeft=" Invalid! ";
          this.btnStatus='btn-prim';
        this.classbtn=true
      }
    
    })
  }

  // ---------------->end
  // Login
  load:boolean=false
  LoginPage(){
    this.load=true

    this.userv.loginOtp(this.phnNo.value).subscribe((msg:Status)=>{this.st=msg.status}
    )
    timer(9000).subscribe(()=>{
    this.load=false
      console.log(this.st);
      if(this.st=='Deliverd'){
        this.optPage()
      }
      else{
        this.displayInvalid="Invalid Phone Number"
        
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Oops...',
        //   text: 'Invalid Account No',
        //   footer: '<a href="">Why do I have this issue?</a>'
        // })
  
      }
    
    })

  }
  user:any;
  getUserDetails() {
   
    console.log('into the get user details');
    
    this.userv.getUseDetails(this.phnNo.value).subscribe((data) => {
      this.user = data;
      this.userv.addToSession(this.user)
      // sessionStorage.setItem('userData', JSON.stringify(this.user));
      // console.log(this.user); 
      // console.log(this.user.fname)
    });
   
  }

  LoginValidated(){
    this.load=true
    this.userv.loginValidate(this.otp).subscribe((msg)=>{this.st = msg.status})
    timer(9000).subscribe(()=>{
    this.load=false
      console.log(this.st);
      if(this.st=='Otp valid'){
        console.log('sending data');
        
        this.getUserDetails()
        
        Swal.fire(
          'Good job!',
          'Login Successful',
          'success'
        )
        timer(1000).subscribe(()=>{
          this.router.navigate(['/Userpage'])

        })
        

        
      }
      else{
      
           this.inputDigitLeft=" Invalid! ";
          this.btnStatus='btn-prim';
        this.classbtn=true
      }
    
    })


  }
  








// ---------------->end
  signUp=true
  
  signUpPage(){
    this.signUp=false
   

  }
  signInPage(){
    this.signUp=true
  }

  // otpconfig(){
  //   this.route.navigate(['/homepage'])
  // }

  @Output() userPage=new EventEmitter<boolean>()

  RedirectUserPage(){
    this.userPage.emit(true)

  }
 
  

 






}

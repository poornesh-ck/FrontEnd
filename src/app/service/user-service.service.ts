import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtpRequest } from 'src/app/modal/OtpRequest';
import { Status } from '../modal/Status';
import { Observable } from 'rxjs';
import { CallDetails } from '../modal/CallDetails';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url='http://localhost:8484/admin'
  st:any
  
  constructor(private http: HttpClient) { }
  getOtp(otp:any):Observable<Status>{
    console.log(typeof otp);
   
   
    return this.http.post<Status>(this.url+"/send-otp",otp)
    
    

   }
   validateOtp(otp:any):Observable<Status>{
    console.log("validate")
    console.log(otp)
   
    return this.http.post<Status>(this.url+"/validate-otp",otp);
   }


  loginOtp(otp:any){
    return this.http.post<Status>(this.url+"/login",otp)

  }   

  loginValidate(otp:any):Observable<Status>{
    return this.http.post<Status>(this.url+"/login-validate",otp);

  }


  getUserDetails(mobileNo: number): Observable<any> {
    const url = `${this.url}/users/${mobileNo}`;
    return this.http.get<any>(url);
  }
  addToSession(user:any){
   
      sessionStorage.setItem('userData', JSON.stringify(user));
      console.log(user); 
      console.log(user.fname)
  }
  user:any
  getFromSession(){
    const userData = sessionStorage.getItem('userData');
    if (userData) {
      this.user = JSON.parse(userData);
      console.log('in servic')
      console.log(this.user);
      console.log(this.user.fname);
    } else {
      console.log('User data not found in session storage.');
    }
    return this.user
  }


  addcalls(call:CallDetails){
    return this.http.post<Status>(this.url+"/calldetails",call)
   }  
  
   getcallDetails(mobileNo: number): Observable<any> {
    const url = `${this.url}/callHistory/${mobileNo}`;
    return this.http.get<any>(url);
  }

}

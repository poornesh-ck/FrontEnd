import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OtpRequest } from 'src/app/modal/OtpRequest';
import { Status } from '../modal/Status';
import { Observable } from 'rxjs';
import {  CallsDet } from '../modal/CallsDet';
import { DataUtilization } from '../modal/DataUtilization';
import { Notification } from '../modal/notification';
import { MessageUtil } from '../modal/message';
import { FeedBack } from '../modal/Feedback';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  url='http://localhost:8484/admin'
  userUrl='http://localhost:8484/User'
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
  billUrl='http://localhost:8484/bill'
  getBillDetails(mobileNo: number):Observable<any>{
    const url = `${this.billUrl}/BillStatus/${mobileNo}`;
    return this.http.get<any>(url);

  }


  getUseDetails(mobileNo: number): Observable<any> {
    const url = `${this.url}/users/${mobileNo}`;
    return this.http.get<any>(url);
  }
  addToSession(user:any){
      console.log('this id from the setting data in session');
      console.log(user);
      
      
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


  addcalls(call:CallsDet){
    return this.http.post<Status>(this.url+"/calldetails",call)
   }  
  
   getcallDetails(mobileNo: number): Observable<any> {
    const url = `${this.url}/callHistory/${mobileNo}`;
    return this.http.get<any>(url);
  }
  // data
  getdataUtilHistory(mobileNo:number):Observable<any>{
    const url = `${this.userUrl}/datautilHistory/${mobileNo}`;
    return this.http.get<any>(url);

  }

  dataUtilization(dUtil:DataUtilization){
    return this.http.post<Status>(this.userUrl+"/DataUtil",dUtil)

  }
  // message
  messageUtil(mUtil:MessageUtil){
    return this.http.post<Status>(this.userUrl+"/Message",mUtil)
  }

  MessageDetails(mobileNo:number):Observable<any>{
    const url = `${this.userUrl}/MessageDetails/${mobileNo}`;
    return this.http.get<any>(url);

  }
  // feedback
  feedbackUrl='http://localhost:8484/FeedBack'
  feedback(feedBack:FeedBack){
    return this.http.post<Status>(this.feedbackUrl+"/feedbacksave",feedBack)

  }

  // csv
  readCsv(){
    return this.http.get<any[]>("http://localhost:8484/api/csv/call")
  }

  readDataCsv(){
    return this.http.get<any[]>("http://localhost:8484/api/csv/data")
  }



  updatePayment(mobileNo: number): Observable<any>{
    const url = `${this.billUrl}/updatepaymentStatus`;
    return this.http.put(url,mobileNo);

  }
  updateCycle(mobileNo: number){

    console.log(typeof mobileNo);
    
    // const url = `${this.billUrl}/updatecycle`;
    return this.http.put('http://localhost:8484/bill/updatecycle',mobileNo);

  }
  getbillHistory(mobileNo: number): Observable<any> {
    const url = `${this.billUrl}/BillHistory/${mobileNo}`;
    return this.http.get<any>(url);
  }

  // notifiction
  notificationpush(notify:Notification){
    return this.http.post<Status>(this.userUrl+"/Notifypost",notify)

  }

  getNotification(mobileNo: number): Observable<any> {
    const url = `${this.userUrl}/Notification/${mobileNo}`;
    return this.http.get<any>(url);
  }

  deleteNotification(notifyName:number){
    const url = `${this.userUrl}/deleteMapping/${notifyName}`;
    return this.http.delete<any>(url);


  }



}

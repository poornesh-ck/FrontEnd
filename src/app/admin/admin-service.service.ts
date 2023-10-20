import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { User } from '../modal/User';
import { Status } from '../modal/Status';
import { OtpRequest } from '../modal/OtpRequest';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url='http://localhost:8484/admin'
  constructor(private http: HttpClient) {

   }
   addUser(user:User){
    return this.http.post<Status>(this.url+"/add",user)
   }

   feedbackurl='http://localhost:8484/FeedBack'
   viewFeedback(){
    // const url = `${this.feedbackurl}/Viewfeedback`;
    return this.http.get('http://localhost:8484/FeedBack/Viewfeedback');

  }

 

}

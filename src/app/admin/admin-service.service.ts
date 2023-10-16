import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { User } from '../modal/User';
import { Status } from '../modal/Status';
import { OtpRequest } from '../modal/OtpRequest';

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

 

}

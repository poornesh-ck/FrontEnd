import { Component } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-feed-back',
  templateUrl: './view-feed-back.component.html',
  styleUrls: ['./view-feed-back.component.css']
})
export class ViewFeedBackComponent {
  constructor(private pserv:AdminServiceService){
    
    pserv.viewFeedback().subscribe((data) =>{
      this.feedback=data
      console.log(this.feedback); 


    })


  }
  feedback:any

}

import { Component } from '@angular/core';
import { Plans } from 'src/app/modal/Plans';

@Component({
  selector: 'app-user-plans',
  templateUrl: './user-plans.component.html',
  styleUrls: ['./user-plans.component.css']
})
export class UserPlansComponent {
  plans:Plans[]=[new Plans(399,75,100,'N/A'),new Plans(699,100,100,'Apllicable'),
  new Plans(999,150,100,'Apllicable'), new Plans(1699,250,100,'Apllicable')]

}

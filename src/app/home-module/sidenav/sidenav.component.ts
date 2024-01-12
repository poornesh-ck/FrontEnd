import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  show(): void {
    const hamburger = document.querySelector('.hamburger') as HTMLElement ;
    const navigation = document.querySelector('.navigation') as HTMLElement;

    if (hamburger && navigation) {
      hamburger.classList.toggle('open');
      navigation.classList.toggle('active');
    }
  }

}

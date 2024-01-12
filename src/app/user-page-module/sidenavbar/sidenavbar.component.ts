import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent {
  show(): void {
    const hamburger = document.querySelector('.hamburger') as HTMLElement ;
    const navigation = document.querySelector('.navigation') as HTMLElement;

    if (hamburger && navigation) {
      hamburger.classList.toggle('open');
      navigation.classList.toggle('active');
    }
  }

}

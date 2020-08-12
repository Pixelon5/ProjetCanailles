import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('mainMenuUnderline') mainMenuUnderline: ElementRef;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      const liActive = document.querySelector('.header-area .main-menu ul li a.active').parentElement;
      const ul = liActive.parentElement;
      this.mainMenuUnderline.nativeElement.style.opacity = 1;
      this.mainMenuUnderline.nativeElement.style.marginLeft = (Array.from(ul.children).indexOf(liActive) * 25).toString() + '%';
    });
  }
}

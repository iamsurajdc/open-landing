import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navFixed: boolean = false;
  private scrollOffset: number = 70;

  @HostListener('window:scroll')
  onWindowScroll() {
    console.log('jabaaaaa');

    this.navFixed = (window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0
    ) > this.scrollOffset;
    console.log(this.navFixed);

  }

  ngOnInit(): void {
  }

}

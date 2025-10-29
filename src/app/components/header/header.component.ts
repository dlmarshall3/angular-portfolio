import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  public resume = 'assets/DavidMarshallResume.pdf';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        setTimeout(() => {
          let toggler = document.getElementById('navbarNavAltMarkup');
          toggler?.classList.remove('show');
        }, 200);
      }
    });
  }

  ngOnInit(): void {}
}

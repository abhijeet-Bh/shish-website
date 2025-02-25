import { Component, HostListener } from '@angular/core';
import { NgStyle } from "@angular/common";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    NgStyle,
    RouterLink,
    RouterLinkActive
  ]
})
export class NavbarComponent {
  isScrolled = false;
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  getLogoSize() {
    if (this.isHomePage && !this.isScrolled) {
      return { width: '100px', height: '100px' };
    } else {
      return { width: '50px', height: '50px' };
    }
  }
}

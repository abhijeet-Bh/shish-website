import { Component } from '@angular/core';
import {AboutUsHeroComponent} from "./about-us-hero/about-us-hero.component";

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    AboutUsHeroComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {

}

import { Component } from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {AboutUsSectionComponent} from "./about-us-section/about-us-section.component";
import {OurCapabilitiesComponent} from "./our-capabilities/our-capabilities.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    AboutUsSectionComponent,
    OurCapabilitiesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

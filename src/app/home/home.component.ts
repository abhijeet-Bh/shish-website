import { Component } from '@angular/core';
import {CarouselComponent} from "./carousel/carousel.component";
import {AboutUsSectionComponent} from "./about-us-section/about-us-section.component";
import {OurCapabilitiesComponent} from "./our-capabilities/our-capabilities.component";
import {FacilitiesSectionComponent} from "./facilities-section/facilities-section.component";
import {SectorsSectionComponent} from "./sectors-section/sectors-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    AboutUsSectionComponent,
    OurCapabilitiesComponent,
    FacilitiesSectionComponent,
    SectorsSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

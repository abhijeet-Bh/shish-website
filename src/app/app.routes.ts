import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { OurCapabilitiesPageComponent } from './our-capabilities-page/our-capabilities-page.component';
import { OurFacilitiesComponent } from './our-facilities/our-facilities.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsPageComponent },
  { path: 'capabilities', component: OurCapabilitiesPageComponent },
  { path: 'facilities', component: OurFacilitiesComponent },
];

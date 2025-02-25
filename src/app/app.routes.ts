import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutUsPageComponent} from "./about-us-page/about-us-page.component";



export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutUsPageComponent },
];

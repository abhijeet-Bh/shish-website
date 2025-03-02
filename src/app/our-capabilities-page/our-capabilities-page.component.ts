import { Component } from '@angular/core';

@Component({
  selector: 'app-our-capabilities-page',
  standalone: true,
  imports: [],
  templateUrl: './our-capabilities-page.component.html',
  styleUrl: './our-capabilities-page.component.css',
})
export class OurCapabilitiesPageComponent {
  experties = [
    {
      id: 1,
      text: 'Finite Element Analysis (FEA)',
    },
    {
      id: 2,
      text: 'Tooling design',
    },
    {
      id: 3,
      text: 'Laminate design',
    },
    {
      id: 4,
      text: 'Surface modeling',
    },
    {
      id: 5,
      text: 'Material selection',
    },
    {
      id: 6,
      text: 'Cutting-edge composite manufacturing techniques',
    },
  ];

  //toolings
  toolings = [
    {
      id: 1,
      image: 'assets/images/carbon.jpg',
      text: 'Carbon Fiber',
    },
    {
      id: 2,
      image: 'assets/images/epoxy.jpg',
      text: 'Epoxy Tooling Board',
    },
    {
      id: 3,
      image: 'assets/images/mdf.jpg',
      text: 'Medium-Density Fiberboard (MDF)',
    },
    { id: 4, image: 'assets/images/aluminum.webp', text: 'Aluminum' },
    { id: 5, image: 'assets/images/steel.png', text: 'Stainless Steel' },
    { id: 6, image: 'assets/images/invar.jpg', text: 'Invar' },
  ];

  //composites
  composites = [
    {
      id: 1,
      image: 'assets/images/carbon-prep.png',
      text: 'Carbon Prepreg',
    },
    {
      id: 2,
      image: 'assets/images/glass-prep.jpg',
      text: 'Glass Prepreg',
    },
    {
      id: 3,
      image: 'assets/images/aramid.jpg',
      text: 'Aramid Prepreg',
    },
    { id: 4, image: 'assets/images/pbo.jpg', text: 'PBO Prepreg' },
    {
      id: 5,
      image: 'assets/images/glass-hybrid.jpg',
      text: 'Glass- Carbon Hybrid Prepreg',
    },
    {
      id: 6,
      image: 'assets/images/carboon-hybrid.jpg',
      text: 'Carbon Aramid Hybrid Prepreg',
    },
    { id: 7, image: 'assets/images/aramid-comb.jpg', text: 'Aramid Honeycomb' },
    { id: 8, image: 'assets/images/alum-comb.jpg', text: 'Aluminum Honeycomb' },
    { id: 9, image: 'assets/images/form.jpg', text: 'PMI Foam' },
    { id: 10, image: 'assets/images/cork.webp', text: 'Cork' },
    { id: 11, image: 'assets/images/monolithic.jpg', text: 'Monolithic' },
    {
      id: 12,
      image: 'assets/images/sec-bond.jpg',
      text: 'Secondary Bonding, Co-Bonding & Co-Curing',
    },
  ];
}

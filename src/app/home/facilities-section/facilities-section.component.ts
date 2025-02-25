import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities-section',
  standalone: true,
  imports: [],
  templateUrl: './facilities-section.component.html',
  styleUrl: './facilities-section.component.css'
})
export class FacilitiesSectionComponent {
  capabilities = [
    { id: 1, image: 'assets/images/clean-room.jpg', text: 'Class 7 / 8 Cleanrooms'},
    { id: 2, image: 'assets/images/autoclave.webp', text: 'Autoclave'},
    { id: 3, image: 'assets/images/cnc.svg', text: '5 Axis CNC Machines'},
    { id: 4, image: 'assets/images/freezer.png', text: 'Freezers'},
    { id: 5, image: 'assets/images/ply-cutting.webp', text: 'Ply Cutting'},
    { id: 6, image: 'assets/images/scanner.png', text: 'Precision Scanning'},
    { id: 7, image: 'assets/images/surface-treat.png', text: 'Surface Treatment'},
    { id: 8, image: 'assets/images/destruction.jpg', text: 'Destructive Testing'},
  ];
}

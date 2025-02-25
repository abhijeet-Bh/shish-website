import { Component } from '@angular/core';

@Component({
  selector: 'app-sectors-section',
  standalone: true,
  imports: [],
  templateUrl: './sectors-section.component.html',
  styleUrl: './sectors-section.component.css'
})
export class SectorsSectionComponent {
  sectors = [
    { id: 1, image: 'assets/icons/flight.svg', text: 'Aerospace'},
    { id: 2, image: 'assets/icons/ship.svg', text: 'Marine'},
    { id: 3, image: 'assets/icons/car.svg', text: 'Automobile'},
    { id: 4, image: 'assets/icons/sport.svg', text: 'Sporting & Luxury'},
    { id: 5, image: 'assets/icons/research.svg', text: 'Research & Development (R&D)'},
    { id: 6, image: 'assets/icons/motorcycle.svg', text: 'Motorsport'},
    { id: 7, image: 'assets/icons/train.svg', text: 'Railways'},
    { id: 8, image: 'assets/icons/tank.svg', text: 'Defence'},
    { id: 9, image: 'assets/icons/medical.svg', text: 'Medical & Others'},
  ];
}

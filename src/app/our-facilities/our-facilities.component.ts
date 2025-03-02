import { Component } from '@angular/core';

@Component({
  selector: 'app-our-facilities',
  standalone: true,
  imports: [],
  templateUrl: './our-facilities.component.html',
  styleUrl: './our-facilities.component.css',
})
export class OurFacilitiesComponent {
  //toolings
  equipments = [
    {
      id: 1,
      image: 'assets/images/autoclave.webp',
      text: 'Autoclave',
      subhead: '(Scholz, Germany)',
      items: [
        'Size: 5 m Length x 2 m Diameter',
        'Vacuum Ports: 16',
        'Maximum Pressure: 10.5 bar',
        'Maximum Temperature: 250°C',
      ],
    },
    {
      id: 2,
      image: 'assets/images/cnc.svg',
      text: '5-Axis CNC Machine',
      subhead: '(Breton, Italy)',
      items: [
        'Size: 4 m L x 2 m W x 1.3 m H',
        'Features: Heavy-duty, explosion-proof dual suction dust extraction system',
      ],
    },
    {
      id: 3,
      image: 'assets/images/freezer.webp',
      text: 'Freezer',
      subhead: '',
      items: ['High-capacity storage for temperature-sensitive materials'],
    },
    {
      id: 4,
      image: 'assets/images/ply.webp',
      text: 'Ply Cutting Machines',
      subhead: '(Bluestar)',
      items: ['Size: 5 m L x 5 m W x 3.5 m H', 'Quantity: 4'],
    },
    {
      id: 5,
      image: 'assets/images/gunner.png',
      text: 'Gunnar Ply Cutting',
      subhead: '(Switzerland)',
      items: [
        'Size: 2.5 m L x 1.3 m W',
        'Features: Conveyorized bed with an automated roll feeder',
      ],
    },
  ];

  //testings
  testings = [
    {
      id: 1,
      image: 'assets/images/measure-sys.png',
      text: 'Measurement Systems',
      subhead: '(FARO Quantum MMAX)',
      items: [
        'Arm Length: 3 m',
        'Features: 7-Axis high-precision measurement capability',
      ],
    },
    {
      id: 2,
      image: 'assets/images/destruction.jpg',
      text: 'Destructive Testing',
      subhead: '(Instron)',
      items: ['Capacity: Up to 600 kN'],
    },
    {
      id: 3,
      image: 'assets/images/ultrasonic.svg',
      text: 'Ultrasonic Testing',
      subhead: '',
      items: ['Tailored to meet customer requirements'],
    },
    {
      id: 4,
      image: 'assets/images/surface-treat.png',
      text: 'Surface Treatment',
      subhead: '(Bluestar)',
      items: ['Customized solutions as per customer specifications'],
    },
  ];
}

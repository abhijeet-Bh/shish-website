import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  slides = [
    { image: 'assets/images/banner-1.jpg', heading: 'Advanced Composites Manufacturer', subheading: 'Innovative Solutions for Aerospace, Automotive, and Industrial Applications', buttonText: 'More about it', buttonLink: '/learn-more' },
    { image: 'assets/images/banner-2.jpg', heading: 'Build to perform, Engineered to last', subheading: 'High-Performance Composite Materials for Extreme Environments', buttonText: 'More about it', buttonLink: '/explore' },
    { image: 'assets/images/banner-3.jpg', heading: 'Imagineering Tomorrow with Advanced Composites Today', subheading: 'Cutting-Edge Composite Technologies for a Sustainable Future', buttonText: 'More about it', buttonLink: '/get-started' },
  ];

  currentSlide = 0;
  autoSlideInterval: any;

  constructor() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  getTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }
}

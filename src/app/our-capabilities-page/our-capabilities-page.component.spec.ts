import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCapabilitiesPageComponent } from './our-capabilities-page.component';

describe('OurCapabilitiesPageComponent', () => {
  let component: OurCapabilitiesPageComponent;
  let fixture: ComponentFixture<OurCapabilitiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCapabilitiesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCapabilitiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

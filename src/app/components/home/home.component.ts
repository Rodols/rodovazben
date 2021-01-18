import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('enterState', [
      state(
        'void',
        style({
          transform: 'scale(0)',
          opacity: 0,
        })
      ),
      transition(':enter', [
        animate(
          800,
          style({
            transform: 'scale(1)',
            opacity: 1,
          })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  @ViewChild('hardware') hardware: ElementRef;
  @ViewChild('servicios') servicios: ElementRef;
  @ViewChild('software') software: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  serviciosVer() {
    this.servicios.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  softwareVer() {
    this.software.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  hardwareVer() {
    this.hardware.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}

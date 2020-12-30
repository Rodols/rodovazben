import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  providers: [HomeComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private compHome: HomeComponent) {}

  ngOnInit(): void {}

  serviciosVer() {
    this.compHome.serviciosVer();
  }
}

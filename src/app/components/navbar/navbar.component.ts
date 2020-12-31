import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  providers: [HomeComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  fabars = faBars;
  faTimes = faTimes;
  constructor() {}

  ngOnInit(): void {}
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { HardwareComponent } from './components/home/hardware/hardware.component';
import { ServiciosComponent } from './components/home/servicios/servicios.component';
import { SoftwareComponent } from './components/home/software/software.component';
import { FooterComponent } from './components/home/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, HardwareComponent, ServiciosComponent, SoftwareComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

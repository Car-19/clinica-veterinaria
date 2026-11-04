
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { ServicesPreviewComponent } from './services-preview/services-preview';
import { AboutPreviewComponent } from './about-preview/about-preview';
import { CtaComponent } from './cta/cta';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    ServicesPreviewComponent,
    AboutPreviewComponent,
    CtaComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {}

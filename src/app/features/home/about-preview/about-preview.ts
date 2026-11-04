
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-preview',
  templateUrl: './about-preview.html',
  styleUrl: './about-preview.scss'
})
export class AboutPreviewComponent {
  team = [
    {
      name: 'Laura Martínez',
      role: 'Veterinaria generalista',
      image: 'images/team-laura.jpg'
    },
    {
      name: 'Carlos Romero',
      role: 'Especialista en cirugía',
      image: 'images/team-carlos.jpg'
    },
    {
      name: 'Ana García',
      role: 'Auxiliar veterinaria',
      image: 'images/team-ana.jpg'
    }
  ];
}

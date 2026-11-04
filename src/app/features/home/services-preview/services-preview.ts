
import { Component } from '@angular/core';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services-preview',
  templateUrl: './services-preview.html',
  styleUrl: './services-preview.scss'
})
export class ServicesPreviewComponent {

  services: Service[] = [
    {
      id: 1,
      icon: '🩺',
      title: 'Consultas generales',
      description: 'Revisiones y atención para el cuidado de su salud.'
    },
    {
      id: 2,
      icon: '💉',
      title: 'Vacunación',
      description: 'Vacunas para proteger su salud en cada etapa.'
    },
    {
      id: 3,
      icon: '🦷',
      title: 'Odontología',
      description: 'Revisión y cuidado de dientes y encías.'
    },
    {
      id: 4,
      icon: '🔬',
      title: 'Diagnóstico',
      description: 'Pruebas para conocer el origen de sus síntomas.'
    },
    {
      id: 5,
      icon: '❤️',
      title: 'Cirugía',
      description: 'Intervenciones y seguimiento veterinario.'
    },
    {
      id: 6,
      icon: '🐾',
      title: 'Peluquería',
      description: 'Baño, higiene y cuidado del pelaje.'
    }
  ];

}

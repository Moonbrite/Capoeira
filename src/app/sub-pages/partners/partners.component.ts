import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  imports: [
    NgFor,
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent {
  partners = [
    {
      name: 'Association A',
      description: 'Une association partenaire active dans la promotion de la Capoeira.',
      website: 'https://www.associationA.com'
    },
    {
      name: 'Association B',
      description: 'Une autre association impliquée dans des projets communautaires et culturels.',
      website: 'https://www.associationB.org'
    },
    {
      name: 'Association C',
      description: 'Association dédiée à la formation des jeunes en Capoeira et en danse.',
      website: 'https://www.associationC.fr'
    }
  ];

  constructor() { }
}
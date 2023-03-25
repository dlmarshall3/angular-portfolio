import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects = [
    {
      projectName: 'Kaiju Calculator',
      projectDescription: `Even though I try to build applications to improve my skills, I tend to design them for my kids, and this one was no different. This particular idea came to mind as I was thinking of how funny it\'d be for someone to be pulled over by the police for not knowing what a speed limit of "1770 Godzillas Per Hour" meant. People may debate whether the heights of the monsters are correct (depending on the movie), but the math checks out. I promise.`,
      projectRepo: 'https://github.com/dlmarshall3/kaiju-calculator',
      projectDemo: 'https://kaiju-calculator.vercel.app/',
      projectImage: 'assets/kaiju-calculator.png',
      npmPackage: '',
    },
    {
      projectName: 'Homestar Ipsum Generator',
      projectDescription: 'What happens when you throw a bunch of Strong Bad emails into a blender? The Homestar Ipsum Generator, that\'s what. Two page application built with Angular. I also turned it into an installable npm package.',
      projectRepo: 'https://github.com/dlmarshall3/homestar-ipsum-angular',
      projectDemo: 'https://homestar-ipsum.vercel.app/',
      projectImage: 'assets/homestar-ipsum.png',
      npmPackage: 'https://www.npmjs.com/package/homestar-ipsum'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
import { Component, OnInit } from '@angular/core';

import { Projects } from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  public projects = Projects;

  constructor() { }

  ngOnInit(): void {
  }

}

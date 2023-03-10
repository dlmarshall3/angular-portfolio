import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() projectName = '';
  @Input() projectDescription = '';
  @Input() projectRepo = '';
  @Input() projectDemo = '';
  @Input() projectImage = '';
  @Input() npmPackage = '';

  constructor() { }

  ngOnInit(): void {
  }

}

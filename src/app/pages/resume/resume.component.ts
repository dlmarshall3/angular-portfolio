import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

import { Jobs } from './jobs';
import { Technologies } from '../../shared/technologies';
import { Education } from './education';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public jobExperience = Jobs;
  public technologies = Technologies;
  public education = Education;

  constructor() { }

  ngOnInit(): void {
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }

}

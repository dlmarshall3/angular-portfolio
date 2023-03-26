import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Technologies } from '../../shared/technologies';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public listOfTechnologies = Technologies;

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }

  ngOnInit(): void {
  }

}

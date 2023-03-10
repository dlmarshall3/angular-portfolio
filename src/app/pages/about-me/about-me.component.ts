import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public listOfTechnologies = {
    Frontend: 'JavaScript, Angular, Vue.js, CSS3, HTML5, AJAX, jQuery',
    Backend: 'C#, Node.js, Express',
    Database: 'PostgreSQL, Knex',
    Misc: 'Azure, SonarQube, LaunchDarkly, Adobe Analytics'
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

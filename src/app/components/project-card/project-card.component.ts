import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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
  @Input() projectVideo = '';
  @Input() npmPackage = '';
  
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.projectVideo) {
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.projectVideo);
    }
  }

  openLink(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
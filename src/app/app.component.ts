import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitter-box.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/linkedin-box.svg'));
    this.matIconRegistry.addSvgIcon('github', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/github-circle.svg'));
    this.matIconRegistry.addSvgIcon('twitch', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/twitch.svg'));
    this.matIconRegistry.addSvgIcon('discord', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/discord.svg'));
    this.matIconRegistry.addSvgIcon('satellite', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/satellite.svg'));
  }
}

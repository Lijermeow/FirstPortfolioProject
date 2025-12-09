import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-about-page',
  imports: [
    RouterLink
  ],
  standalone: true,
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {

}

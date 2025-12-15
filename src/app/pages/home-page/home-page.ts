// Libraries Imports
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(private title: Title) {
    this.title.setTitle('Home | Protfolio');
  }
}

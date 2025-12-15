// Libraries Imports
import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.css',
})
export class NotFoundPage {
  constructor(private title: Title) {
    this.title.setTitle('404 | Protfolio');
  }
}

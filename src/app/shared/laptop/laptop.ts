import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-laptop',
  imports: [CommonModule],
  templateUrl: './laptop.html',
  styleUrl: './laptop.css',
})
export class Laptop {
  @Input()
  set src(value: string) {
    this._src = this._sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  get src(): SafeResourceUrl {
    return this._src;
  }

  public isLoading = true;

  private _src!: SafeResourceUrl;
  private _sanitizer = inject(DomSanitizer);

  public onLoaded() {
    this.isLoading = false;
  }
}

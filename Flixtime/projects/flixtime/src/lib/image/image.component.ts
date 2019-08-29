import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../flixtime.models';
import { FlixtimeService } from '../flixtime.service';

@Component({
  selector: 'tm-image',
  template: `<img *ngIf="posterUrl$ | async as src" [src]="src" />`,
  styles: [
    `
  :host {
    display: inline-block;
    overflow: hidden;
    border-radius: 4px;
    line-height: 0;
  }
  `
  ]
})
export class ImageComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: FlixtimeService) {}

  ngOnInit() {
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId)
      .pipe(map(show => show.image.medium));
  }
}
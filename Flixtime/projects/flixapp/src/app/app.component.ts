
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlixtimeService } from 'flixtime';
import { Show } from 'flixtime/lib/flixtime.models';

@Component({
  selector: 'app-root',
  template: `
    <tm-image [showId]="1"></tm-image>
    <pre>{{ show$ | async | json }}</pre>
  `
})
export class AppComponent {
  show$: Observable<Show>;

  constructor(private flixtime: FlixtimeService) {
    this.show$ = this.flixtime.getShow(1);
  }
}
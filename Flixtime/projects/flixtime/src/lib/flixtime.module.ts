
import { NgModule } from '@angular/core';
import { FlixtimeComponent } from './flixtime.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ImageComponent } from './Image/Image.component';


@NgModule({
  declarations: [FlixtimeComponent,ImageComponent],
  imports: [CommonModule,  HttpClientModule,
  ],
  exports: [FlixtimeComponent, ImageComponent]
})
export class FlixtimeModule { }
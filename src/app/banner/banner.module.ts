import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component'
import { MCarouselModule }from '../mcarousel/m-carousel.module'

@NgModule({
  imports: [
    CommonModule,
    MCarouselModule
  ],
  declarations: [
    BannerComponent
  ],
  providers: [],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }

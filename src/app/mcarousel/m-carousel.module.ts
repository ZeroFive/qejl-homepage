import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { MCarouselContentDirective } from './m-carousel-content.directive';
import { MCarouselComponent } from './m-carousel.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    MCarouselContentDirective,
    MCarouselComponent
  ],
  exports: [
    MCarouselContentDirective,
    MCarouselComponent
  ],
  entryComponents: [MCarouselComponent],
})
export class MCarouselModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: MCarouselModule, providers: [] }
  }
 }


import { transition } from '@angular/core/src/animation/dsl';
import { HOST_ATTR } from '@angular/platform-browser/src/dom/dom_renderer';
import { MCarouselComponent } from './m-carousel.component';
import { selector } from 'rxjs/operator/publish';
import { Directive, ElementRef, forwardRef, HostBinding, Inject, Input, OnInit, style } from '@angular/core';

@Directive({
  selector: '[m-carousel-content]'
})
export class MCarouselContentDirective implements OnInit {

  @Input() index: number
  width: number

  @HostBinding('class.m-carousel__item') carouselItem: boolean = true
  @HostBinding('class.is-active') isActive: boolean = false
  @HostBinding('class.is-animating') isAnimating: boolean
  @HostBinding('style.transform') styles: string
  preTranslate: number

  constructor( @Inject(forwardRef(() => MCarouselComponent)) public root: MCarouselComponent, private el: ElementRef,
  ) { }

  updateActive(): void {
    const isActive: boolean = this.root.index === this.index
    if (this.isActive !== isActive) {
      this.isActive = isActive
    }
  }

  updateStyles(): void {
    const offset: number = this.index - this.root.index
    let translate = 0
    if (offset === 0) {
      translate = 0
    } else if (offset === 1) {
      translate = this.width
    } else if (offset === -1) {
      translate = - this.width
    } else if (offset === this.root.childrenNum - 1) {
      translate = - this.width
    } else if (- offset === this.root.childrenNum - 1) {
      translate = this.width
    } else if (offset < 0) {
      translate = - this.width
    } else if (offset < this.root.childrenNum - 1) {
      translate = this.width
    }
    const changeDirection: boolean = (this.preTranslate < 0 && translate > 0)
      || (this.preTranslate > 0 && translate < 0)
    this.isAnimating = !changeDirection
    this.styles = `translateX(${translate}px)`
    this.preTranslate = translate
  }

  update(): void {
    this.updateStyles()
    this.updateActive()
  }

  ngOnInit(): void {
    this.width = this.el.nativeElement.offsetWidth
    this.root.subscriber.push(() => this.update())
    this.update()
  }

}

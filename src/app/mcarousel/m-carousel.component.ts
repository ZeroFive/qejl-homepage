import { Subscription } from 'rxjs/Rx';
import { Observable,  } from 'rxjs/Observable';
import { animate } from '@angular/core/src/animation/dsl';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MCarouselContentDirective } from './m-carousel-content.directive';
import { carouselBtnLeftAnimation, carouselBtnRightAnimation } from './animations'

@Component({
  selector: 'm-carousel',
  animations: [carouselBtnLeftAnimation, carouselBtnRightAnimation],
  template: `
  <div class="m-carousel"
    #carousel
    (mouseenter)="carousel.hover = true"
    (mouseleave)="carousel.hover = false">
    <div class="m-carousel__container"  [ngStyle]="{height: height}" #carouselContainer>
      <button class="m-carousel__arrow m-carousel__arrow--pre"
        #preBtn
        [@carouselBtnLeftAnimation]="carousel.hover"
        (mouseenter)="btnActionHandle(index - 1)"
        (click)="btnActionHandle(index - 1)">
        ←
      </button>
      <button class="m-carousel__arrow m-carousel__arrow--next"
        #nextBtn
        [@carouselBtnRightAnimation]="carousel.hover"
        (mouseenter)="btnActionHandle(index + 1)"
        (click)="btnActionHandle(index + 1)">
        →
      </button>
      <ng-content></ng-content>
    </div>
    <ul class="m-carousel__indicators">
      <li *ngFor="let item of children; let i = index"
        class="m-carousel__indicator"
        [class.is-active]="i === index"
        (click)="indicatorActionHandle(i)">
      </li>
    </ul>
  </div>`,
  styleUrls: ['./m-carousel.component.css']
})
export class MCarouselComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() height: string
  @Input() trigger: string = 'click'
  @Input() indicatorTrigger: string = 'click'
  @Input() autoplay: boolean = true
  @Input() interval: number = 3000
  @Input() childrenNum: number = 3 
  @Input('initial-index') initialIndex: number = 0
  @Input('indicator-position') indicatorPosition: string
  @ViewChild('carouselContainer') carouselContainer: ElementRef

  @Input() index: number = 0
  @Output() indexChange: EventEmitter<any> = new EventEmitter<any>()

  resizeObserber: Observable<any>
  sizeChanges: Subscription


  @ContentChildren(forwardRef(() => MCarouselContentDirective)) children: QueryList<MCarouselContentDirective>
  subscriber: Function[] = []
  timer: any
  hover: boolean = false

  constructor(private hostEl: ElementRef) {}

  btnActionHandle(next: number): void {
    if (this.childrenNum === 1) return
    this.autoplay && this.resetInterval()
    this.setActiveItem(next)
  }

  indicatorActionHandle(next: number): void {
    this.btnActionHandle(next)
  }

  setActiveItem(index: number): void {
    const next = index >= this.childrenNum ? 0 : index < 0 ? this.childrenNum - 1 : index
    this.index = next
    this.subscriber.forEach(callBack => callBack())
    this.indexChange.emit(this.index)
  }

  resetInterval(): void {
    if (this.childrenNum === 1) return
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(_ => {
      this.setActiveItem(this.index + 1)
    }, this.interval)
  }

  ngAfterViewInit(): void {
    const timer = setTimeout(_ => {
      this.height = `${this.carouselContainer.nativeElement.children[2].offsetHeight}px`
      this.children.forEach((item, index) => {
        item.index = index
        item.updateActive()
        item.updateStyles()
      })
      this.autoplay && this.resetInterval()
      clearTimeout(timer)
    }, 0)
    this.resizeObserber = Observable.fromEvent(window, 'resize').debounceTime(10)
    this.sizeChanges = this.resizeObserber.subscribe((event) => {
      const width = this.hostEl.nativeElement.children[0].offsetWidth
      this.children.forEach((item) => {
        item.width = width
      })
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes.index) return
    this.setActiveItem(changes.index.currentValue)
  }

  ngOnDestroy(): void {
    this.timer && clearInterval(this.timer)
    this.sizeChanges.unsubscribe()
  }
}

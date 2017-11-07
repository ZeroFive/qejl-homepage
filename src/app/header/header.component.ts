import { Component, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core'
import { NavigaterService } from '../navigaterService'

@Component({
  selector: 'page-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class PageHeaderComponent implements OnInit{
  lastEl: string;
  isBurgerActive: boolean = false;

  constructor(private navigaterService: NavigaterService, private renderer2: Renderer2) {
  }

  ngOnInit() {
    this.lastEl = 'homeLink';
    this.navigaterService.navigaterAnnounced$.subscribe(el => {
      this.lastEl = el;
    })
  }

  toggleBurger() {
    this.isBurgerActive = !this.isBurgerActive;
  }
}

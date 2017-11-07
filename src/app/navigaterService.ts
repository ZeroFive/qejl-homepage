import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable()
export class NavigaterService {

  private NavigaterSource = new Subject<string>();

  public navigaterAnnounced$ = this.NavigaterSource.asObservable();

  public announceNavigater(el: string) {
    this.NavigaterSource.next(el);
  }

  public scrollObservable = Observable.fromEvent(window, 'scroll').debounceTime(10) 
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingIndicatorService {
  private indicator$ = new Subject<boolean>();

  constructor() {
  }

  public show() {
    this.indicator$.next(true);
  }

  public hide() {
    this.indicator$.next(false);
  }

  public getObservable(): Observable<boolean> {
    return this.indicator$.asObservable();
  }
}

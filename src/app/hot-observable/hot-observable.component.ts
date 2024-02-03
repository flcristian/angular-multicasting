import {Component, OnInit} from '@angular/core';
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-hot-observable',
  templateUrl: './hot-observable.component.html',
  styleUrl: './hot-observable.component.sass'
})
export class HotObservableComponent implements OnInit{
  // DATA IS EMITTED OUTSIDE OF THE OBSERVABLE
  hotObservable$ = fromEvent(document, 'click');

  ngOnInit() {
    // @ts-ignore
    this.hotObservable$.subscribe((event: MouseEvent) => {
      console.log(`The first subscriber: [${event.x}, ${event.y}]`);
    });

    // @ts-ignore
    this.hotObservable$.subscribe((event: MouseEvent) => {
      console.log(`The second subscriber: [${event.x}, ${event.y}]`);
    });
  }
}

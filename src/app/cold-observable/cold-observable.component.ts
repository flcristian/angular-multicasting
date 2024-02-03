import {Component, OnInit} from '@angular/core';
import { Observable} from 'rxjs';


@Component({
  selector: 'app-cold-observable',
  templateUrl: './cold-observable.component.html',
  styleUrl: './cold-observable.component.sass'
})
export class ColdObservableComponent implements OnInit{
  // DATA IS CREATED BY THE OBSERVABLE ITSELF
  coldObservable$ = new Observable(observer => {
    observer.next(Math.random());
    observer.next(Math.random());
    observer.complete();
  });

  ngOnInit() {
    this.coldObservable$.subscribe(data => {
      console.log(`The first Observer : ${data}`);
    });

    this.coldObservable$.subscribe(data => {
      console.log(`The second Observer : ${data}`);
    });
  }
}

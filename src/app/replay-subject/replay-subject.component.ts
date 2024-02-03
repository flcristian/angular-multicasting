import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  template: `
    <h1>ReplaySubject Example</h1>
    <button (click)="updateValue()">Update Value</button>
    <div>
      <p>First Subscriber Values:</p>
      <ul>
        <li *ngFor="let value of firstSubscriberValues">{{ value }}</li>
      </ul>
      <p>Second Subscriber Values:</p>
      <ul>
        <li *ngFor="let value of secondSubscriberValues">{{ value }}</li>
      </ul>
    </div>
  `,
})
export class ReplaySubjectComponent implements OnInit {
  private replaySubject = new ReplaySubject<number>(2);
  firstSubscriberValues: number[] = [];
  secondSubscriberValues: number[] = [];

  ngOnInit() {
    this.replaySubject.subscribe((value) => {
      this.firstSubscriberValues.push(value);
    });

    this.replaySubject.subscribe((value) => {
      this.secondSubscriberValues.push(value);
    });
  }

  updateValue() {
    const newValue = Math.random();
    this.replaySubject.next(newValue);
  }
}

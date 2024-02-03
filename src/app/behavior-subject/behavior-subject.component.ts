import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  template: `
    <h1>BehaviorSubject Example</h1>
    <button (click)="updateValue()">Update Value</button>
    <div>
      <p>First Subscriber Value: {{ firstSubscriberValue }}</p>
      <p>Second Subscriber Value: {{ secondSubscriberValue }}</p>
    </div>
  `,
})
export class BehaviorSubjectComponent implements OnInit {
  private behaviorSubject = new BehaviorSubject<number>(0);
  firstSubscriberValue: number = 0
  secondSubscriberValue: number = 0

  ngOnInit() {
    this.behaviorSubject.subscribe((value) => {
      this.firstSubscriberValue = value;
    });

    this.behaviorSubject.subscribe((value) => {
      this.secondSubscriberValue = value;
    });
  }

  updateValue() {
    const newValue = Math.random();
    this.behaviorSubject.next(newValue);
  }
}

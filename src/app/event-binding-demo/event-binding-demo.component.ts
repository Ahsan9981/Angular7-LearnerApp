import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  template: `
    <p>Event Binding Demo</p>
    <button (click)="onClick($event)">Click Me</button>
    <button (click)="greetings = 'Hello Ahsan ☺' ">Greet</button>
    {{greetings}}
  `,
  styles: []
})
export class EventBindingDemoComponent implements OnInit {

  constructor() { }

  greetings: string = "";

  ngOnInit() {
  }

  onClick(event): void {
    console.log(event.type);
    this.greetings = "Welcome JavaScript Guru Ahsan ☺";
    
  }

}

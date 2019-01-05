import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'component-interaction-demo',
  template: `
    <h2>Component Interaction Demo </h2>
    <p>{{'Hello ' + name}}</p>
    <button (click)="fireEvent()"> Fire Event </button>
  `,
  styles: []
})
export class ComponentInteractionDemoComponent implements OnInit {

  @Input('parentData') name = '';
  @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(): void {
    this.childEvent.emit('Hey Software Development Guru ☺');
  }

}

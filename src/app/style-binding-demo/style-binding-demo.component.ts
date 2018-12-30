import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding-demo',
  template: `
    <p> Welcome to Style Binding Tutorial </p>

    <p [style.color]="hasError ?  'red' : 'green' "> Style Binding </p>
    <p [style.color]="highlightText"> Style Binding </p>
    <p [ngStyle]="styles"> Style Binding </p>
  `,
  styles: []
})
export class StyleBindingDemoComponent implements OnInit {

  hasError: boolean = true;

  highlightText = "blue";

  styles = {
    'color': 'blue',
    'font-style': 'italic'
  };

  constructor() { }

  ngOnInit() {
  }

}

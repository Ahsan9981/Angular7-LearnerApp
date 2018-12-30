import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-demo',
  template: `
    <p> Welcome to Class Binding Tutorial </p>
    <h2 class="text-success">JavaScript Rocks! ☺</h2>
    <h2 [class]="successClass">JavaScript Rocks! ☺</h2>
    <h2 class="text-special" [class]="successClass">JavaScript Rocks! ☺</h2>
    <h2 [class.text-danger]="hasError">JavaScript Rocks! ☺</h2>
    <h2 [ngClass]="messageClasses">Ahsan Rocks! ☺</h2>
    <h2 [class]="isSpecial ? 'text-special': ''">Ahsan Rocks! ☺</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
  }
  `]
})
export class ClassBindingDemoComponent implements OnInit {

  successClass = "text-success";
  hasError: boolean = false;
  isSpecial: boolean = true;

  messageClasses = {
    'text-special': this.isSpecial,
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    
  }

  constructor() { }

  ngOnInit() {
  }

}

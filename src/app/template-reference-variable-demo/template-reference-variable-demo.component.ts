import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-reference-variable-demo',
  template: `
    <p>Template Reference Variable Demo</p>
    <input #myInput type="text">
    <button (click)="logMessage(myInput.value)">Log Value</button>
    <button (click)="logElement(myInput)">Log</button>
  `,
  styles: []
})
export class TemplateReferenceVariableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logElement(input) {
    console.log(input);
  }

  logMessage(value: string) {
    console.log(value);
    
  }

}

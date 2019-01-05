import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-switch-directive-demo',
  template: `
    <div [ngSwitch]="color"  [style.color]="color">
      <div *ngSwitchCase="'red'"> You picked red </div>
      <div *ngSwitchCase="'green'"> You picked green </div>
      <div *ngSwitchCase="'blue'"> You picked blue </div>
      <div *ngSwitchDefault> Pick again ! </div>
    </div>
  `,
  styles: []
})
export class NgSwitchDirectiveDemoComponent implements OnInit {


  color:string = "orange";

  constructor() { }

  ngOnInit() {
  }

}

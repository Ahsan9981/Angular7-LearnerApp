import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-if-directive-demo',
  template: `
  <h2 *ngIf="displayName; else otherBlock">
  I am Ahsan
  </h2>
  <ng-template #otherBlock> 
    <h2> I am not Ahsan </h2>
  </ng-template>

  <p> Demo of sperating if and else block from structurl ngIf directive </p>

  <div *ngIf="displayName; then thenBlock; else elseBlock"> </div>

  <ng-template #thenBlock> 
  <h2> If-Then Block </h2>
  </ng-template>

  <ng-template #elseBlock> 
  <h2> Else Block </h2>
  </ng-template>

  `,
  styles: []
})
export class NgIfDirectiveDemoComponent implements OnInit {

  displayName: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}

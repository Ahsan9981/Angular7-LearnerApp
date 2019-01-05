import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-directive-demo',
  styles: [],
  template: `
      <h4>Render All Elements With Index</h4>
      <div *ngFor="let color of colors; let i = index">
        <h2> {{i}} {{color}} </h2>
      </div>

      <h4>Render All Elements With Odd Index As True</h4>
      <div *ngFor="let color of colors; odd as o">
        <h2> {{o}} {{color}} </h2>
      </div>

      <h4>Render All Elements With Even Index As True</h4>
      <div *ngFor="let color of colors; even as e">
        <h2> {{e}} {{color}} </h2>
      </div>

      <h4>Render All Elements With First Index As True</h4>
      <div *ngFor="let color of colors; first as f">
        <h2> {{f}} {{color}} </h2>
      </div>

      
      <h4>Render All Elements With Last Index As True</h4>
      <div *ngFor="let color of colors; last as l">
        <h2> {{l}} {{color}} </h2>
      </div>
  `

})
export class NgForDirectiveDemoComponent implements OnInit {


  colors: string[] = ['red', 'green', 'blue', 'yellow'];

  constructor() { }

  ngOnInit() {
  }

}

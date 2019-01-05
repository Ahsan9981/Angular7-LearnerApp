import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  template: `
        <h1> Pipe for strings type properties </h1>
        <h4> {{ name }} </h4>
        <h4> {{ name | lowercase }} </h4>
        <h4> {{ name | uppercase }} </h4>
        <h4> {{ message | titlecase }} </h4>
        <h4> {{ person.firstName | slice:3 }} </h4>
        <h4> {{ person.firstName | slice:3:4 }} </h4>
        <h4> {{ person | json }} </h4>

        <br>
        <h1> Number pipe </h1>
        <h4> {{ 5.678 | number:'1.2-3' }} </h4>
        <h4> {{ 5.678 | number:'3.4-5' }} </h4>
        <h4> {{ 5.678 | number:'3.1-2' }} </h4>
        <h4> {{ 5.678 | number:'3.1-1' }} </h4>

        <h1> Percent Pipe</h1>
        <h4> {{ 0.25 | percent }} </h4>

        <br>
        <h1> Currency Pipe</h1>
        <h4> {{ 0.25 | currency:'EUR' }} </h4>
        <h4> {{ 0.25 | currency:'EUR':'code' }} </h4>

        <br>
        <h1> Date Pipe Demo </h1>
        <h4> {{ date | date:'short' }} </h4>
        <h4> {{ date | date:'shortTime' }} </h4>
        <h4> {{ date | date:'shortDate'}} </h4>
       
  `,
  styles: []
})
export class PipeDemoComponent implements OnInit {

  date: Date = new Date();
  name: string = 'Logic Powered Solutions';
  message: string = 'Welcome to logic powered solutions';


  person: object = {
    'firstName': 'Mohammad',
    'lastName' : 'Ahsan'
  };
  
  constructor() { }

  ngOnInit() {
  }

}

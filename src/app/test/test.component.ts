import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <div>
        Welcome {{name}} ☺
      </div>
      <h1> {{2+8}} </h1>
      <h1> {{name + " is working on MEAN Stack Web Devlopment"}} </h1>
      <h1> {{name.length}} </h1>
      <h1> {{name.toUpperCase()}} </h1>
      <h1> {{greetDeveloper()}} </h1>
      
      <!--
      Template parse error: Cannot specify assignments or JavaScript global variables
      so need to do it in component class. 
      <h1> {{a = 4}} </h1>
      <h1> {{windows.location.href}} </h1>
      -->
      <h1> {{siteUrl}} </h1>
  `,
  styles: [``]
})
export class TestComponent implements OnInit {


  name: string = "Ahsan"
  siteUrl: string = window.location.href;

  constructor() { }

  ngOnInit() {

  }

  greetDeveloper(): string {
    return "Hello " + this.name;
  }

}

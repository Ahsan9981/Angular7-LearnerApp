import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
      <div>
        Welcome {{name}} ☺
      </div>
      <h5> {{2+8}} </h5>
      <h5> {{name + " is working on MEAN Stack Web Devlopment"}} </h5>
      <h5> {{name.length}} </h5>
      <h5> {{name.toUpperCase()}} </h5>
      <h5> {{greetDeveloper()}} </h5>
      
      <!--
      Template parse error: Cannot specify assignments or JavaScript global variables
      so need to do it in component class. 
      <h5> {{a = 4}} </h5>
      <h5> {{windows.location.href}} </h5>
      -->
      <h5> {{siteUrl}} </h5>

      <input id="{{myId}}" type ="text" value="Ahsan"/>
      <input [id]="myTestId" [disabled]="isDisabled" type ="text" value="Ahsan"/>
      <input [id]="myTestId" bind-disabled="isDisabled" type ="text" value="Ahsan"/>
  `,
  styles: [``]
})
export class TestComponent implements OnInit {


  name: string = "Ahsan"
  siteUrl: string = window.location.href;
  myId: string = "test-id";
  myTestId: string ="my-test-id";

  isDisabled: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  greetDeveloper(): string {
    return "Hello " + this.name;
  }

}

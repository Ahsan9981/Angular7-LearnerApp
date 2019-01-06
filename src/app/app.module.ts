import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ClassBindingDemoComponent } from './class-binding-demo/class-binding-demo.component';
import { StyleBindingDemoComponent } from './style-binding-demo/style-binding-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { TemplateReferenceVariableDemoComponent } from './template-reference-variable-demo/template-reference-variable-demo.component';
import { NgIfDirectiveDemoComponent } from './ng-if-directive-demo/ng-if-directive-demo.component';
import { NgSwitchDirectiveDemoComponent } from './ng-switch-directive-demo/ng-switch-directive-demo.component';
import { NgForDirectiveDemoComponent } from './ng-for-directive-demo/ng-for-directive-demo.component';
import { ComponentInteractionDemoComponent } from './component-interaction-demo/component-interaction-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassBindingDemoComponent,
    StyleBindingDemoComponent,
    EventBindingDemoComponent,
    TemplateReferenceVariableDemoComponent,
    NgIfDirectiveDemoComponent,
    NgSwitchDirectiveDemoComponent,
    NgForDirectiveDemoComponent,
    ComponentInteractionDemoComponent,
    PipeDemoComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

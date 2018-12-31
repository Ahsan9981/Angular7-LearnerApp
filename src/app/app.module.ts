import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { ClassBindingDemoComponent } from './class-binding-demo/class-binding-demo.component';
import { StyleBindingDemoComponent } from './style-binding-demo/style-binding-demo.component';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';
import { TemplateReferenceVariableDemoComponent } from './template-reference-variable-demo/template-reference-variable-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ClassBindingDemoComponent,
    StyleBindingDemoComponent,
    EventBindingDemoComponent,
    TemplateReferenceVariableDemoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

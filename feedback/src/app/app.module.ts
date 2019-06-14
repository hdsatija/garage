import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';
import { GoogleformComponent } from './bad/googleform/googleform.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SubmitComponent } from './submit/submit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodComponent,
    BadComponent,
    GoogleformComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

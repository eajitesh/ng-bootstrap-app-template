import { NgModule } from '@angular/core';

import { SignupComponent } from './signup.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    SignupComponent
  ],
  providers: [],
  exports: [SignupComponent]
})
export class SignupModule { }

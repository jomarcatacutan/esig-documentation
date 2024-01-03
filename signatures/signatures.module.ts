import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignaturesRoutingModule } from './signatures-routing.module';
import { SignatureComponent } from './signature.component';


@NgModule({
  declarations: [
    SignatureComponent
  ],
  imports: [
    CommonModule,
    SignaturesRoutingModule
  ]
})
export class SignaturesModule { }

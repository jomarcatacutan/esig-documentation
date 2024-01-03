import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ESignatureRoutingModule } from './e-signature-routing.module';
import { ESignatureComponent } from './e-signature.component';
import { AccountRoutingModule } from 'app/modules/account/account-routing.module';
import { EsigHeaderComponent } from './esig-header/esig-header.component';
import { FormModule } from './form/form.module';


@NgModule({
  declarations: [
    ESignatureComponent,
    EsigHeaderComponent
  ],
  imports: [
    CommonModule,
    ESignatureRoutingModule,
    AccountRoutingModule,
    FormModule
  ]
})
export class ESignatureModule { }

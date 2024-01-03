import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ESignatureComponent } from './e-signature.component';
import { AccountResolver } from 'app/modules/account/services/account.resolver';
import { SignatureComponent } from './signatures/signature.component';
import { AuthGuard } from 'app/modules/auth/services/auth.guard';
import { AuthSignatureGuard } from 'app/modules/auth/services/authsignature.guard';

const routes: Routes = [
  {
    path: '',
    component: ESignatureComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'signature',
        canActivate: [AuthSignatureGuard],
        loadChildren: () =>
          import('./signatures/signatures.module').then((m) => m.SignaturesModule),
      },
      {
        path: 'form',
        canActivate: [AuthSignatureGuard],
        loadChildren: () =>
          import('./form/form.module').then((m) => m.FormModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ESignatureRoutingModule { }

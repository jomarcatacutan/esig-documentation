import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/auth';
import { ToastService } from 'app/shared/toast/services/toast.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  unsubscribe: any;
  isLoading$: any;
  hasError: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  responseMessage: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(
    private authService: AuthService,
    private socialAuthService: SocialAuthService,
    private _toastService: ToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
     // get the googleUserData
     const currentUser = localStorage.getItem('googleUserData');
     if (currentUser) {
       this.router.navigate(['/e-signature/form']);
     } else {
        //google account trigger and condition
        const googleSub = this.socialAuthService.authState.subscribe((user) => {
          if(user){
            user.photoUrl = this.changePhotoResolution(user.photoUrl);
            this.authService.googleAuthSignature(user).subscribe(response => {
              if (response?.result === '403' || response?.result === '404') {
                this.hasError.next(true);
                this.responseMessage.next(response.message);
                this._toastService.danger(response.message);
              }
            }, error => {
              this._toastService.danger('Unable to sign you in');
            });
          } else {
            this._toastService.danger('Logged-out');
          }
        });
     }
 
  }

 // Convert the google image to high quality version
  changePhotoResolution(photo_url: string) {
    const modified = photo_url.split('=s96-c')[0]+'=s500-c';
    return modified; 
  }

}

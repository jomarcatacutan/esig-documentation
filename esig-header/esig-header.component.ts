import { Component } from '@angular/core';
import { AuthService } from 'app/modules/auth';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-esig-header',
  templateUrl: './esig-header.component.html',
  styleUrls: ['./esig-header.component.scss']
})
export class EsigHeaderComponent {
  email: string;
  name: string;
  profilePicture: string;
  showSignOutButton: boolean = false;

  constructor(
    private authService: AuthService,
    private location: Location,
    private route: ActivatedRoute, 
    private router: Router
  ) {
  }

  logout() {
    this.authService.logoutSignature();
  }
}

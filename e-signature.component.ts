import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-e-signature',
  templateUrl: './e-signature.component.html',
  styleUrls: ['./e-signature.component.scss']
})
export class ESignatureComponent implements OnInit {

  display: boolean = true;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location) {}

 
    ngOnInit(): void {
      this.checkRoute();
  
      // Subscribe to router events to re-evaluate the condition on route changes
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.checkRoute();
        }
      });
    }
  
    private checkRoute(): void {
      const currentUrl = this.location.path();
      // Check if the current route is '/e-signature/auth/login'
      this.display = currentUrl.includes('/e-signature/auth/login');
    }




}

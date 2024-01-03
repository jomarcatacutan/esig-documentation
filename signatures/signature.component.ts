import { Component, OnInit } from '@angular/core';
import { Account } from 'app/modules/account/types/account.type';
import { UserType } from 'app/modules/auth';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.scss']
})
export class SignatureComponent implements OnInit {
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  userdata: any;
  showSectionClarkoutsourcing: boolean = false;
  showSectionClarkstaff: boolean = false;
  showSectionBees: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const dataString = params['userdata'];
       if(!dataString) {
         this.router.navigate(['/e-signature/form']);
       } else {
        this.userdata = JSON.parse(dataString);
       }
    });

    const staticDomainCO = '@clarkoutsourcing.com';
    const staticDomainCS = '@clarkstaff.com';
    const staticDomainBee = '@thebrandingbees.com';

    if (this.userdata.emailAddress.endsWith(staticDomainCO)) {
      this.showSectionClarkoutsourcing = true;
    } else if (this.userdata.emailAddress.endsWith(staticDomainCS)) {
      this.showSectionClarkstaff = true;
    } else if (this.userdata.emailAddress.endsWith(staticDomainBee)) {
      this.showSectionBees = true;
    }

  }




  copyTable(elId: string) {
    const urlField = document.getElementById(elId);

    if (urlField) {
      const range = document.createRange();
      range.selectNode(urlField);
      const selection = window.getSelection();
      
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        window.alert('Copied to clipboard!');
      } else {
        console.log('Window selection is null.');
      }
    } else {
      console.log(`Element with id '${elId}' not found.`);
    }
  }

  // Helper function to remove the prefix
  removePrefix(value: string): string {
    return value.replace(/^\[\w+-\d+\]\s*/, '');
  }

  // Helper function to remove leading spaces
  removeLeadingSpaces(value: string): string {
    return value.replace(/^[\s\uFEFF\xA0]+/g, '');
  }
}

import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  profile: any;
  userdata: any;
  showSectionClarkoutsourcing: boolean = false;
  showSectionClarkstaff: boolean = false;
  showSectionBees: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    const storedData = localStorage.getItem('googleUserData');
    //get the user data in localstorage
    if (storedData) {
      this.userdata = JSON.parse(storedData);
      this.profile = this.userdata.profile_picture;
    }

    this.form = this.formBuilder.group({
      fullName: [this.userdata?.name || '', Validators.required],
      position: [this.userdata?.position || '', Validators.required],
      phoneNumber: [this.userdata?.phone || '', Validators.required],
      emailAddress: [this.userdata?.email || '', [Validators.required, Validators.email]],
      skypeId: [this.userdata?.skype || '', Validators.required],
      profile: [this.profile || '', Validators.required],
    });
  

    // Subscribe to form value changes
    this.form.valueChanges.subscribe(() => {
      this.updateUserData();
    });

    const staticDomainCO = '@clarkoutsourcing.com';
    const staticDomainCS = '@clarkstaff.com';
    const staticDomainBee = '@thebrandingbees.com';

    if (this.userdata.email.endsWith(staticDomainCO)) {
      this.showSectionClarkoutsourcing = true;
    } else if (this.userdata.email.endsWith(staticDomainCS)) {
      this.showSectionClarkstaff = true;
    } else if (this.userdata.email.endsWith(staticDomainBee)) {
      this.showSectionBees = true;
    }
    
 }

  onSubmit() {

    if (this.form.valid) {
      // The form is valid, perform your action here.
      const formData = this.form.value;
      // Navigate to another page and pass the form data as a parameter
      this.router.navigate(['/e-signature/signature'], { queryParams: { userdata: JSON.stringify(formData) } });
    } 
  }

  updateUserData() {
    if (this.form.valid) {
      //stored the form value for realtime preview
      const formData = this.form.value;
    }
  }


  

}

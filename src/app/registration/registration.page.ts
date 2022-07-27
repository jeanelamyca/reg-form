import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registration = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancelMe() {
    this.router.navigate(['/home']);
  }
}

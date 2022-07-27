import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login = new FormGroup({
    name: new FormControl('', Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit() {
  }
 
  cancelMe() {
    this.router.navigate(['/home']);
  }
}

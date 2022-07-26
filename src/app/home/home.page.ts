import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  logMeIn() {
    this.router.navigate(['login']);
  }

  regMeIn() {
    this.router.navigate(['/registration']);
  }

  cancelMe() {
    this.router.navigate(['/home']);
  }

}

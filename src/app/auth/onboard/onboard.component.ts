import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceClass } from '../auth.service';
import { response } from '../../shared/response.model';

declare const M;

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {
  firstName = '';
  lastName = '';
  username = '';
  branch = '';
  year = '';
  number = null;
  state = '';

  constructor(private onboardService: AuthServiceClass, private router: Router) {
    if (sessionStorage.getItem('token') == null) {
      this.router.navigate(['auth', 'login']);
    }
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      M.toast({ html: 'Enter valid data in the form' });
    } else {
      const data = {
        token: window.sessionStorage.getItem('token'),
        ...form.value
      };

      this.onboardService.onBoard(data)
        .subscribe((res: response) => {
          M.toast({ html: res.message });
          console.log(res);
          if (res.success) {
            if (res.data != null && res.data.token != null) {
              sessionStorage.removeItem('token');
              sessionStorage.setItem('token', res.data.token);
            }
            this.router.navigate(['/app', 'blogs']);
          } else {
            this.router.navigate(['/auth', 'login']);
          }
        }, (err) => {
          M.toast({ html: err.message });
        });
    }
  }

}

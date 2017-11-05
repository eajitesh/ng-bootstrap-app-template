import { Component } from '@angular/core';
import {Signup} from './signup';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignupService]
})
export class SignupComponent {
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';

  signupCompletionMessage = '';
  signupCompletionCSSClass = '';
  signupSuccess = false;

  signup = new Signup('', '', '', '');

  countries = ['india', 'canada', 'us'];

  constructor(private signupService: SignupService) {
  }

  confirmPassword() {
    if (this.signup.password === this.passwordConfirmationTxt) {
      this.passwordConfirmationFailed = false;
    } else {
      this.passwordConfirmationFailed = true;
    }
  }

  onSubmit() {
    this.signupService.signup(this.signup).then(signupStatus => {
      this.signupCompletionMessage = signupStatus.message;
      this.signupSuccess = signupStatus.status;
      if (signupStatus.status === true) {
        this.signupCompletionCSSClass = 'alert alert-success';
      } else {
        this.signupCompletionCSSClass = 'alert alert-danger';
      }
    });
  }

}

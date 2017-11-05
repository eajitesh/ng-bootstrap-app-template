
import {Injectable} from '@angular/core';
import {Signup} from './signup';
import {SignupStatus} from './signupstatus';

@Injectable()
export class SignupService {

  signup(signup: Signup): Promise<SignupStatus> {
    if (signup.email === 'aiyana@gmail.com') {
      return Promise.resolve(new SignupStatus(false, 'User with same email address exists. Please try again!'));
    }
    return Promise.resolve(new SignupStatus(true, 'User is successfully registered!'));
  }

}

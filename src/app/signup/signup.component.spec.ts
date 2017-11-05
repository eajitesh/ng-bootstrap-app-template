import {TestBed, async, ComponentFixture} from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';

describe('SignupComponent', () => {

  let fixture: ComponentFixture<SignupComponent>;
  let component: SignupComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
          declarations: [
            SignupComponent
          ],
          imports: [
            FormsModule
          ],
    }).compileComponents().then(() => {
        fixture = TestBed.createComponent(SignupComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(SignupComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app');
  // }));
  //
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(SignupComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  // }));
});

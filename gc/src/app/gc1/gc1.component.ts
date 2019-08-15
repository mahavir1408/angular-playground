import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { InvisibleReCaptchaComponent } from 'ngx-captcha';

@Component({
  selector: 'app-gc1',
  templateUrl: './gc1.component.html',
  styleUrls: ['./gc1.component.scss']
})
export class Gc1Component implements OnInit {
  @ViewChild('captchaElem', { read: false }) captchaElem: InvisibleReCaptchaComponent;
  siteKey = '6LckpEgUAAAAACPcjmrg1Es-GnTltKx0MP61FBO8';
  form: FormGroup;
  someError = '';
  public captchaSuccess = false;
  public captchaResponse?: string;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      recaptcha: new FormControl(''),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('Form', this.form.value);
    this.captchaElem.execute();
  }

  execute(): void {
    this.captchaElem.execute();
  }

  reset() {
    this.form.reset();
    this.someError = '';
  }

  handleLoad() {
    console.log('handleLoad');
  }

  handleReady() {
    console.log('handleReady');
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    console.log('this.captchaResponse', this.captchaResponse);
    console.warn('handleSuccess Form', this.form.value);
    // this.cdr.detectChanges();
  }

}

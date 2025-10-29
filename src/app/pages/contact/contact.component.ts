import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  public displayErrors = false;
  public emailSentSuccessfully = false;
  public emailSentUnsuccessfully = false;
  public emailSubmissionCheck = false;
  public emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  public onSubmit() {
    if (this.emailForm.invalid) {
      this.displayErrors = true;
      return;
    } else {
      this.emailSubmissionCheck = true;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http
        .post(
          'https://formspree.io/f/mdovlbbj',
          {
            name: this.emailForm.controls.name.value,
            replyto: this.emailForm.controls.email.value,
            message: this.emailForm.controls.message.value,
          },
          { headers: headers }
        )
        .subscribe((response) => {
          if (response) {
            this.emailSubmissionCheck = false;
            this.emailSentSuccessfully = true;
            this.resetForm();
            this.displayErrors = false;
          } else {
            this.emailSubmissionCheck = false;
            this.emailSentUnsuccessfully = true;
          }
        });
    }
  }

  private resetForm() {
    this.emailForm.patchValue({ name: '' });
    this.emailForm.patchValue({ email: '' });
    this.emailForm.patchValue({ message: '' });
  }
}

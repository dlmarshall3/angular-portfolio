import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public displayErrors = false;
  public emailForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comments: new FormControl('', [Validators.required])
  });

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    if(this.emailForm.invalid){
      this.displayErrors = true;
      return;
    } else {
      this.emailService.sendEmail(this.emailForm.value).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    }
  }


}

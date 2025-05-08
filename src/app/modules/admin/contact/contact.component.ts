import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }      from '@angular/material/input';
import { MatButtonModule }     from '@angular/material/button';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    TranslocoModule
  ],
      providers: [
        provideTranslocoScope('common')
      ],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  contactForm = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    const { name, email, subject, message } = this.contactForm.value;
    const body = encodeURIComponent(
      `Nom : ${name}\nEmail : ${email}\n\n${message}`
    );
    const mailto = `mailto:florian.morena@gmail.com`
      + `?subject=${encodeURIComponent(subject)}`
      + `&body=${body}`;
    window.location.href = mailto;
  }
}

import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon/icon';
import { SITE } from '../../core/data/site-data';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

// Web3Forms is designed to be called directly from the browser (their
// access key is meant to be public client-side, protected by their own
// domain-restriction setting rather than secrecy) — proxying it through a
// backend gets blocked by their Cloudflare bot-management challenge, since
// a server-to-server request has no browser/JS/cookies to satisfy it.
const WEB3FORMS_ACCESS_KEY = 'df3e5822-28ce-4344-bf52-defd561b3376';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, Icon],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly site = SITE;
  protected readonly state = signal<SubmitState>('idle');
  protected readonly errorMessage = signal('');

  protected readonly projectTypes = [
    'Website Development',
    'Web Application',
    'Android App',
    'iOS App',
    'Custom Software',
    'Digital Marketing',
    'AI Agent Development',
    'Other',
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    projectType: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    company: [''], // honeypot — left empty by real users
  });

  get f() {
    return this.form.controls;
  }

  submit(): void {
    if (this.form.invalid || this.state() === 'submitting') {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();

    // Honeypot: a real visitor never fills this hidden field in. Pretend
    // success without ever contacting Web3Forms, same as the old backend did.
    if (value.company) {
      this.state.set('success');
      this.form.reset();
      return;
    }

    this.state.set('submitting');
    this.errorMessage.set('');

    this.http
      .post<{ success?: boolean; message?: string }>(WEB3FORMS_ENDPOINT, {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New project inquiry from ${value.name}`,
        from_name: 'S3 Globe Web Solutions — Contact Form',
        replyto: value.email,
        Name: value.name,
        Email: value.email,
        Phone: value.phone || 'Not provided',
        'Project Type': value.projectType,
        Message: value.message,
      })
      .subscribe({
        next: (res) => {
          if (res.success) {
            this.state.set('success');
            this.form.reset();
          } else {
            this.state.set('error');
            this.errorMessage.set(res.message || 'Something went wrong. Please try again or reach us on WhatsApp.');
          }
        },
        error: (err) => {
          this.state.set('error');
          this.errorMessage.set(err?.error?.message || 'Something went wrong. Please try again or reach us on WhatsApp.');
        },
      });
  }
}

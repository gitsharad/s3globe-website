import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Icon } from '../../shared/icon/icon';
import { SITE } from '../../core/data/site-data';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

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

    this.state.set('submitting');
    this.errorMessage.set('');

    this.http.post<{ ok?: boolean; error?: string }>('/api/contact', this.form.getRawValue()).subscribe({
      next: () => {
        this.state.set('success');
        this.form.reset();
      },
      error: (err) => {
        this.state.set('error');
        this.errorMessage.set(err?.error?.error || 'Something went wrong. Please try again or reach us on WhatsApp.');
      },
    });
  }
}

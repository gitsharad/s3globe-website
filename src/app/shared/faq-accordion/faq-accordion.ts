import { Component, input, signal } from '@angular/core';
import { Icon } from '../icon/icon';
import { FaqItem } from '../../core/data/site-data';

@Component({
  selector: 'app-faq-accordion',
  imports: [Icon],
  templateUrl: './faq-accordion.html',
  styleUrl: './faq-accordion.css',
})
export class FaqAccordion {
  readonly items = input.required<FaqItem[]>();

  protected readonly openIndex = signal<number | null>(0);

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}

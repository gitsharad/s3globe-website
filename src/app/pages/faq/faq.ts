import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { FaqAccordion } from '../../shared/faq-accordion/faq-accordion';
import { FAQS } from '../../core/data/site-data';

@Component({
  selector: 'app-faq',
  imports: [RouterLink, Icon, FaqAccordion],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  protected readonly faqs = FAQS;
}

import { Component, input } from '@angular/core';
import { Icon } from '../icon/icon';
import { Testimonial } from '../../core/data/site-data';

@Component({
  selector: 'app-testimonial-card',
  imports: [Icon],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css',
})
export class TestimonialCard {
  readonly testimonial = input.required<Testimonial>();

  protected readonly stars = Array.from({ length: 5 });
}

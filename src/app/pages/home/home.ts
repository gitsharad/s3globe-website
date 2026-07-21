import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { ServiceCard } from '../../shared/service-card/service-card';
import { StatCounter } from '../../shared/stat-counter/stat-counter';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import {
  PORTFOLIO,
  PROCESS_STEPS,
  SERVICES,
  STATS,
  TECH_GROUPS,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from '../../core/data/site-data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, ServiceCard, StatCounter, TestimonialCard, SectionHeading],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly services = SERVICES;
  protected readonly stats = STATS;
  protected readonly whyChooseUs = WHY_CHOOSE_US;
  protected readonly techGroups = TECH_GROUPS;
  protected readonly processSteps = PROCESS_STEPS;
  protected readonly portfolio = PORTFOLIO.slice(0, 3);
  protected readonly testimonials = TESTIMONIALS;
}

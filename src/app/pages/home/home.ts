import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { ServiceCard } from '../../shared/service-card/service-card';
import { StatCounter } from '../../shared/stat-counter/stat-counter';
import { TestimonialCard } from '../../shared/testimonial-card/testimonial-card';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import {
  INDUSTRIES,
  PORTFOLIO,
  PROCESS_STEPS,
  SERVICES,
  STATS,
  TECH_GROUPS,
  TESTIMONIALS,
  WHY_CHOOSE_US,
} from '../../core/data/site-data';

const SLIDE_INTERVAL_MS = 6000;

@Component({
  selector: 'app-home',
  imports: [RouterLink, Icon, ServiceCard, StatCounter, TestimonialCard, SectionHeading],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly services = SERVICES;
  protected readonly stats = STATS;
  protected readonly whyChooseUs = WHY_CHOOSE_US;
  protected readonly techGroups = TECH_GROUPS;
  protected readonly processSteps = PROCESS_STEPS;
  protected readonly portfolio = PORTFOLIO.slice(0, 3);
  protected readonly testimonials = TESTIMONIALS;

  protected readonly heroSlides = PORTFOLIO;
  protected readonly activeSlide = signal(0);

  ngOnInit(): void {
    const timer = setInterval(() => this.nextSlide(), SLIDE_INTERVAL_MS);
    this.destroyRef.onDestroy(() => clearInterval(timer));
  }

  nextSlide(): void {
    this.activeSlide.update((i) => (i + 1) % this.heroSlides.length);
  }

  prevSlide(): void {
    this.activeSlide.update((i) => (i - 1 + this.heroSlides.length) % this.heroSlides.length);
  }

  goToSlide(index: number): void {
    this.activeSlide.set(index);
  }

  getIndustryIcon(industry: string): string {
    return INDUSTRIES.find((i) => i.name === industry)?.icon ?? 'layers';
  }
}

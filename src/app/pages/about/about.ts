import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { SectionHeading } from '../../shared/section-heading/section-heading';
import { StatCounter } from '../../shared/stat-counter/stat-counter';
import { STATS } from '../../core/data/site-data';

interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, Icon, SectionHeading, StatCounter],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly stats = STATS;

  protected readonly values: ValueItem[] = [
    {
      icon: 'zap',
      title: 'Move Fast, Ship Right',
      description: 'We balance speed with quality — no rushed launches that break, no endless cycles that never ship.',
    },
    {
      icon: 'shield-check',
      title: 'Transparency First',
      description: 'Clear timelines, honest scoping, and no hidden costs. You always know where your project stands.',
    },
    {
      icon: 'users',
      title: 'Partnership, Not Just Vendor',
      description: 'We think like co-founders of your product, not a contractor ticking off a task list.',
    },
    {
      icon: 'layers',
      title: 'Built to Scale',
      description: 'Every architecture decision considers where your business will be in two years, not just launch day.',
    },
  ];
}

import { AfterViewInit, Component, input, signal } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-stat-counter',
  imports: [],
  templateUrl: './stat-counter.html',
  styleUrl: './stat-counter.css',
})
export class StatCounter implements AfterViewInit {
  readonly value = input.required<number>();
  readonly suffix = input<string>('');
  readonly label = input.required<string>();

  protected readonly display = signal(0);

  ngAfterViewInit(): void {
    const counter = { val: 0 };
    gsap.to(counter, {
      val: this.value(),
      duration: 1.6,
      delay: 0.2,
      ease: 'power2.out',
      onUpdate: () => this.display.set(Math.round(counter.val)),
    });
  }
}

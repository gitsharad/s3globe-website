import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-brand-mark',
  imports: [],
  templateUrl: './brand-mark.html',
  styleUrl: './brand-mark.css',
})
export class BrandMark {
  readonly size = input<'sm' | 'lg'>('sm');
  readonly showTagline = input<boolean>(false);

  protected readonly iconClass = computed(() =>
    this.size() === 'lg' ? 'h-11 w-11' : 'h-8 w-8',
  );
  protected readonly wordmarkClass = computed(() =>
    this.size() === 'lg' ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl',
  );
}

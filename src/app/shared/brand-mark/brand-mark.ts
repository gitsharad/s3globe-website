import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-brand-mark',
  imports: [],
  templateUrl: './brand-mark.html',
  styleUrl: './brand-mark.css',
})
export class BrandMark {
  readonly size = input<'sm' | 'lg'>('sm');

  protected readonly imgClass = computed(() =>
    this.size() === 'lg' ? 'h-14 sm:h-16' : 'h-9 sm:h-10',
  );
}

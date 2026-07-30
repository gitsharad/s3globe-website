import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class VisitCounterService {
  readonly count = signal<number | null>(null);
  private fetched = false;

  init(): void {
    if (this.fetched) return;
    this.fetched = true;

    fetch('/api/visit-count', { method: 'POST' })
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { count?: number } | null) => {
        if (data?.count) this.count.set(data.count);
      })
      .catch(() => {
        // Counter is a nice-to-have; fail silently and just don't show it.
      });
  }
}

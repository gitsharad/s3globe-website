import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { WhatsappButton } from './layout/whatsapp-button/whatsapp-button';
import { SeoService } from './core/services/seo.service';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, WhatsappButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected readonly themeService = inject(ThemeService);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        if (data['seo']) {
          this.seo.set(data['seo']);
        }
        if (!this.router.parseUrl(this.router.url).fragment) {
          window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        }
      });
  }
}

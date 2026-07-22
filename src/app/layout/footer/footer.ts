import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { BrandMark } from '../../shared/brand-mark/brand-mark';
import { SERVICES, SITE } from '../../core/data/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Icon, BrandMark],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly site = SITE;
  protected readonly services = SERVICES;
  protected readonly year = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Technologies', path: '/technologies' },
    { label: 'Industries', path: '/industries' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];
}

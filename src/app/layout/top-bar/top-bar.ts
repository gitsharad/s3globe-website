import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { SITE } from '../../core/data/site-data';

@Component({
  selector: 'app-top-bar',
  imports: [RouterLink, Icon],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.css',
})
export class TopBar {
  protected readonly site = SITE;
  protected readonly whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi S3 Globe, I'd like to discuss a project.",
  )}`;
}

import { Component } from '@angular/core';
import { SITE } from '../../core/data/site-data';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.css',
})
export class WhatsappButton {
  protected readonly whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi S3 Globe, I'd like to discuss a project.",
  )}`;
}

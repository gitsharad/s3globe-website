import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../icon/icon';
import { ServiceItem } from '../../core/data/site-data';

@Component({
  selector: 'app-service-card',
  imports: [RouterLink, Icon],
  templateUrl: './service-card.html',
  styleUrl: './service-card.css',
})
export class ServiceCard {
  readonly service = input.required<ServiceItem>();
}

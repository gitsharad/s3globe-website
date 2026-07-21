import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { SERVICES } from '../../core/data/site-data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, Icon],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services = SERVICES;
}

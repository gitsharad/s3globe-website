import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { INDUSTRIES } from '../../core/data/site-data';

@Component({
  selector: 'app-industries',
  imports: [RouterLink, Icon],
  templateUrl: './industries.html',
  styleUrl: './industries.css',
})
export class Industries {
  protected readonly industries = INDUSTRIES;
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { PORTFOLIO } from '../../core/data/site-data';

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink, Icon],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  protected readonly flagship = PORTFOLIO.filter((p) => p.isFlagship);
  protected readonly sample = PORTFOLIO.filter((p) => !p.isFlagship);
}

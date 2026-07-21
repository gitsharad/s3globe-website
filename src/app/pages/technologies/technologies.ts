import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../shared/icon/icon';
import { TECH_GROUPS } from '../../core/data/site-data';

@Component({
  selector: 'app-technologies',
  imports: [RouterLink, Icon],
  templateUrl: './technologies.html',
  styleUrl: './technologies.css',
})
export class Technologies {
  protected readonly techGroups = TECH_GROUPS;
}

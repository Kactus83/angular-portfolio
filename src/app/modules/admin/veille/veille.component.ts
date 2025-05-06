import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule }      from '@angular/router';
import { MatIconModule }     from '@angular/material/icon';
import { MatButtonModule }   from '@angular/material/button';
import { PortfolioCardComponent } from '@portfolio/components/card';

import { VeilleService } from './veille.service';
import { Sector, Article } from './veille.types';

@Component({
  selector   : 'app-veille',
  standalone : true,
  imports    : [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    PortfolioCardComponent
  ],
  templateUrl: './veille.component.html',
  styleUrls  : ['./veille.component.scss']
})
export class VeilleComponent implements OnInit
{
  sectors: Sector[] = [];
  selected!: Article;

  constructor(private _service: VeilleService) {}

  ngOnInit(): void
  {
    this._service.getSectors().subscribe(sectors =>
    {
      this.sectors = sectors;
      // sélection initiale
      this.selected = sectors[0].articles[0];
    });
  }

  select(a: Article): void
  {
    this.selected = a;
  }
}

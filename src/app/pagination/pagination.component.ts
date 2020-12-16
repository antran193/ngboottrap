import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';
import { Hero, HEROES } from '../heros/heroes';



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page = 1;
  heros: Hero[];
  colect = HEROES.length;
  pageSize = 4;
  constructor(config: NgbPaginationConfig) {
    config.size = 'sm';
    config.boundaryLinks = true;
    this.refreshHeros();
  }

  ngOnInit(): void {
  }
  refreshHeros() {
    this.heros = HEROES
      .map((hero, i) => ({ id: i + 1, ...hero }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}

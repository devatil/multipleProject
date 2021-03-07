import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Response } from '../../../interfaces/response';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  currentPage = 1;

  @Input()
  lastPage;

  @Output()
  pageChanged = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  prev() {
    if (this.currentPage === 1) return;
    this.currentPage--;
    this.pageChanged.emit(this.currentPage);
  }

  next() {
    if (this.currentPage === this.lastPage) return;
    this.currentPage++;
    this.pageChanged.emit(this.currentPage);
  }
}

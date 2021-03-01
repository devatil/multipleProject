import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  @Input()
  user: User = null;

  constructor() {}

  ngOnInit(): void {}
}

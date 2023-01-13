import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  valueChanged(bool: any) {
    this.opened = bool;
  }

}

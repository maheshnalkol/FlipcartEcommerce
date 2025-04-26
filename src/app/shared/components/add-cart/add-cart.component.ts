import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.scss'],
})
export class AddCartComponent implements OnInit {
  count: number = 1;
  constructor() {}

  ngOnInit(): void {}

  oncountdecrease() {
    if (this.count > 1) {
      this.count--;
    }
  }
  oncountincrease() {
    if (this.count > 0) {
      this.count++;
    }
  }
}

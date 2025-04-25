import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../../models/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-singleprod',
  templateUrl: './singleprod.component.html',
  styleUrls: ['./singleprod.component.scss'],
})
export class SingleprodComponent implements OnInit {
  prodObj!: Iproduct;
  prodId!: string;
  stars = new Array(5);
  rating!: number;
  selectedImg!: string;
  constructor(
    private _routes: ActivatedRoute,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.prodId = this._routes.snapshot.params['prodId'];
    this._prodService.getPRodObj(this.prodId).subscribe((s) => {
      this.prodObj = s;
      this.rating = s.rating;
      this.selectedImg = s.images[0];
    });
  }
  fillWidth(): string {
    return `${(this.prodObj.rating / 5) * 100}%`;
  }
  getStarFill(index: number): string {
    if (this.rating >= index + 1) {
      return '100%'; // full star
    } else if (this.rating > index) {
      const fillPercent = ((this.rating - index) * 100).toFixed(0);
      return `${fillPercent}%`; // partial star
    } else {
      return '0%'; // empty star
    }
  }

  onchangeImg(img: string) {
    this.selectedImg = img;
  }
}

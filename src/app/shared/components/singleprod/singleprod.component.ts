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
  constructor(
    private _routes: ActivatedRoute,
    private _prodService: ProductService
  ) {}

  ngOnInit(): void {
    this.prodId = this._routes.snapshot.params['prodId'];
    this._prodService.getPRodObj(this.prodId).subscribe((s) => {
      this.prodObj = s;
    });
  }
  fillWidth(): string {
    return `${(this.prodObj.rating / 5) * 100}%`;
  }
}

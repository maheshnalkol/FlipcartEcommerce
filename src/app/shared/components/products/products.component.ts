import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productArr: Iproduct[] = [];
  isInWhishlist: boolean = false;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllproduct();
  }
  onwhishlist() {
    this.isInWhishlist = !this.isInWhishlist;
  }
}

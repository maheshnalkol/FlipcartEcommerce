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
  productObj!: Iproduct;
  imageLoaded: boolean = false;
  whishlistMap: { [productId: string]: boolean } = {};
  // selectedImg: string = '';
  hoveredProduct: any = null;
  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this._productService.fetchAllproduct().subscribe((s) => {
      this.productArr = s;
      console.log(this.productArr);
    });
  }
  onwhishlist(eve: Event, obj: Iproduct, i: number) {
    eve.stopPropagation();

    const prodId = obj._id;
    this.whishlistMap[prodId] = !this.whishlistMap[prodId];
    // let getIndexof = this.productArr.findIndex((f) => f._id == obj._id);
    // if (getIndexof === i) {
    //   this.isInWhishlist = !this.isInWhishlist;
    // }
  }

  // onhover() {
  //   this.selectedImg = '';
  // }
  onmouseEnter(prod: Iproduct) {
    this.hoveredProduct = prod;
  }
  onleave() {
    this.hoveredProduct = null;
  }
  onImageLoad() {
    this.imageLoaded = true;
  }

  onPreview(prod: Iproduct) {}
}

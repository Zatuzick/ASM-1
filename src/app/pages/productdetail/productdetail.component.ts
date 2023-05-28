import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './productdetail.component.html',

})
export class ProductdetailComponent {
  product: IProduct = {
    name: "",
    price: 0
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.paramMap.subscribe(param => {
      const id = Number(param.get("id"));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      })
    })
  }
}

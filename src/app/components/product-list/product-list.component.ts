import { Component, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',

})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    })
  }
  removeItem(id: any) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    })

  }
}
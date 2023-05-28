import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: [0],


  })
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router) {

  }
  onHandleSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    const product: IProduct = {
      name: this.productForm.value.name || '',
      price: this.productForm.value.price || 0
    }
    this.productService.addProduct(product).subscribe(data => {
      this.router.navigate(['/admin/product']);
    })
  }
}
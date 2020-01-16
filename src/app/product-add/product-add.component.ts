import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private Route: ActivatedRoute,
    private productService: ProductService,
    private navigate: Router
  ) { }

  ngOnInit() {
    // this.addProduct();
  }
  addProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
      this.navigate.navigateByUrl('/products');
    })
  }


}

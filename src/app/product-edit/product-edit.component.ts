import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param =>{
      const { id } = param;
        this.ProductService.getProduct(id).subscribe(data =>{
          this.product = data;
        })
    })
  }
  saveProduct(product){
    this.ProductService.updateProduct(product).subscribe(data =>{
      this.router.navigateByUrl('/products');
    })
  }
}

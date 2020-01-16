import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input('data') product: Product;
  product: Product;
  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService

  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param =>{
      this.productService.getProduct(param.id).subscribe(data =>{
        this.product= data;
      })
    })
  }

}

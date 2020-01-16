import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService} from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];
  SelectedProduct: Product;
  constructor( 
    private productService: ProductService 
    ) {}
  
  ngOnInit() {
    // this.getProduct();
    this.getProducts();
  }

  // getProduct(){
  //   this.products = this.productService.getProduct();
  // }
  getProducts(){
    this.productService.getProducts().subscribe(data =>{
      console.log(data);
      this.products = data;
      
    })
      
  }

  DeleteProduct(id){
    this.products = this.productService.DeleteProduct(id);
  }
  DetailProduct(product){
    console.log(product);
    this.SelectedProduct = product;
  }

}

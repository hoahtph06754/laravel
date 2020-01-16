import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  product:Product = {
    id: 1,
    name:'banh',

  }
  clickGo = event =>{
    // console.log('jfgkjhg');
    this.product.name = event.target.value;
  }
}

import { Injectable } from '@angular/core';
import { ProductData } from '../MockData';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Products ="http://5dd7845d0a27af00149fd131.mockapi.io/products";
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.Products);
  }
  private products = ProductData;
  // getProduct(): Product[]{
  //   return this.products;
  // }
  DeleteProduct(pr): Product[]{
    return this.products = this.products.filter(item =>item.id != pr);
  }
  addProduct(product): Observable<Product[]>{
    return this.http.post<Product[]>(this.Products,product);
  }
  getProduct(id){
  return this.http.get<Product>(`${this.Products}/${id}`);
 }
 updateProduct(products): Observable<Product[]>{
   return this.http.put<Product[]>(`${this.Products}/${products.id}`,products)
 }


}

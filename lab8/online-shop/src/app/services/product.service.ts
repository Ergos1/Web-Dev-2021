import { Injectable } from '@angular/core';
import { Product } from "../interfaces/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url:string = "http://127.0.0.1:8000/api"

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    console.log("I AM TRYING");
    return this.http.get<Product[]>(this.url+"/products/");
  }

}

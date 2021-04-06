import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!:Product[]
  loaded:boolean = false;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    this.service.getProducts().subscribe(products=>{
      console.log("Hello");
      this.products = products;
      console.log(this.products);
      this.loaded = true;
    })
  }

}

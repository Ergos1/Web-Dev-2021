import { Component, OnInit } from '@angular/core';
import { Product } from "../../../assets/interfaces/product";
import { ActivatedRoute } from '@angular/router';
import { Data } from "../../../assets/dates/data";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  category_name: string;
  products: Product[];

  constructor(private route: ActivatedRoute) { 
    this.products=[];
    this.category_name = "";
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts():void{
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get("categoryId"));
    this.products = Data.getProductsByCategoryId(categoryIdFromRoute);
    this.category_name = Data.getCategories().find(category => category.id == categoryIdFromRoute)?.name || "undefined";
  }

  round(num:number):number{
    return Math.round(Math.min(num,5));
  }

  share(link:string, item:Product):void{
    window.open(link + "Йоу, как тебе эта вещь ? Вот ссылка: " + item.link);
  }

  del(item:Product):void{
    let willDel = confirm("Are you sure?");
    if(willDel) {
      Data.delProduct(item);
      this.getProducts();
    }
  }

  like(item:Product):void{
    Data.likeProduct(item);
    this.getProducts();
  }

}

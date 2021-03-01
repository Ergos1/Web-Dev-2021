import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../../assets/interfaces/product";
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from "../../../assets/dates/data";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  product!:Product;
  
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));
    this.product = Data.getProducts().find(p => p.id === productIdFromRoute) || Data.getProducts()[0];
  }

  change(index2change:number){
    this.product.index_img = index2change;
  }

  round(num:number):number{
    return Math.round(Math.min(num,5));
  }

  roundPrice(price:number):number{
    return +price.toFixed(2);
  }

  share(link:string, item:Product):void{
    window.open(link + "Йоу, как тебе эта вещь ? Вот ссылка: " + item.link);
  }

  del(item:Product):void{
    let willDel = confirm("Are you sure?");
    if(willDel){
      this.router.navigate(["/categories", this.product.categoryId, "products"]);
      Data.delProduct(item);
    }
  }
  like(item:Product):void{
    Data.likeProduct(item);
    this.getProduct();
  }

}

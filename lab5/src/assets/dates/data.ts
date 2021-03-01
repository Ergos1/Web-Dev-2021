import { products } from "./data-product";
import { categories } from "./data-category";
import { Category } from "../interfaces/category";
import { Product } from "../interfaces/product";

export class Data{

    constructor(){}

    static getProducts():Product[]{
        return JSON.parse(localStorage.getItem("products")||JSON.stringify(products));
    }

    static getProductsByCategoryId(categoryId:number):Product[]{
        return this.getProducts().filter(p=>p.categoryId === categoryId);
    }

    static getCategories():Category[]{
        return JSON.parse(localStorage.getItem("categories")||JSON.stringify(categories));
    }

    static likeProduct(product:Product):void{
        let newProducts = this.getProducts();
        let indexProduct = newProducts.indexOf(newProducts.find(p => p.id == product.id)||newProducts[0]);
        if(newProducts[indexProduct].liked) newProducts[indexProduct].cnt_like--;
        else newProducts[indexProduct].cnt_like++;
        newProducts[indexProduct].liked = !newProducts[indexProduct].liked ;
        this.saveProducts(newProducts);
    }

    static delProduct(product:Product):void{
        let newProducts = this.getProducts().filter(p=>p.id != product.id);
        this.saveProducts(newProducts);
    }

    static saveProducts(products:Product[]):void{
        localStorage.setItem('products', JSON.stringify(products));

    }
}
export interface Product{
    categoryId: number;
    id: number;
    name:string;
    description:string;
    price:number;
    rating:number;
    images:string[];
    index_img:number;
    link:string;
    cnt_like:number;
    liked:boolean;
}
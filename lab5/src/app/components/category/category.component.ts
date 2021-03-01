import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../../../assets/interfaces/category";
import { Data } from "../../../assets/dates/data";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories!:Category[];

  constructor() {
  }

  ngOnInit(): void {
    this.categories = Data.getCategories();
  }


}


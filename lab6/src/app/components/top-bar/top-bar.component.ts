import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  selected: number = 1;

  constructor(private router: Router, private searchService:SearchService) { }

  ngOnInit(): void {
  }

  goHome():void{
    this.router.navigate(["home"]);
  }

  onChange(newValue:number):void{
    this.selected = newValue;
    this.searchService.setPattern(this.selected);
  }

  onSearch(newValue:string):void{
    this.searchService.setValue(newValue);
  }

  getSearchValue():string{
    if(this.selected==1) return "id";
    else return "name";
  }

}

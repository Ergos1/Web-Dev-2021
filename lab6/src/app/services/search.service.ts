import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Album } from "../../assets/interfaces/album";
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchPattern:number;
  searchValue:BehaviorSubject<string>;

  constructor() {
    this.searchPattern = 1;
    this.searchValue=new BehaviorSubject<string>("");
  }

  getAlbumFiltredBySearch(albums:Album[]):Album[]{
    if(this.searchValue.value.trim() == ""){
      albums.map(album=>{album.isVisible = true; return album;})
      return albums;
    }
    else if(this.searchPattern == 1){
      return (this.getFilterById(albums));
    }
    else return (this.getFilterByName(albums));
  }
  
  getFilterById(albums:Album[]):Album[]{
    albums.map(album => {
      if(album.id == +this.searchValue.value) album.isVisible = true;
      else album.isVisible = false;
      return album;
    })
    return albums;
  }
  
  getFilterByName(albums:Album[]):Album[]{
    albums.map(album => {
      if(this.isPatternTitle(album.title)) album.isVisible = true;
      else album.isVisible = false;
      return album;
    })
    return albums;
  }

  isPatternTitle(title: string):boolean{
    if(title.length < this.searchValue.value.length) return false;
    for(let i = 0; i < this.searchValue.value.length; i++){
      if(this.searchValue.value[i] != title[i]) return false;
    }
    return true;
  }

  setPattern(id:number):void{
    this.searchPattern = id;
  }

  setValue(value:string):void{
    this.searchValue.next(value);
  }
}

import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from "../../../assets/interfaces/album";
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums!:Album[];
  loaded!:boolean;
  reactiveForm!:FormGroup;

  constructor(private albumService: AlbumsService, private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit(): void {
    this.loaded = false;
    this.getAlbums();
  }

  initForm():void{
    this.reactiveForm = this.fb.group({
      userId: 5,
      id: this.albums.length+1,
      title: ["", Validators.minLength(5)],
      isVisible:true
    })
  }

  onSumbit():void{
    if(this.reactiveForm.invalid){
      Object.keys(this.reactiveForm.controls).forEach(name=>this.reactiveForm.controls[name].markAsTouched())
      return;
    }
    this.addAlbum();
  }

  addAlbum():void{
    this.albums = [...this.albums, this.reactiveForm.value];
    this.initForm();
    this.albumService.addAlbum(this.reactiveForm.value).subscribe(addAlbum =>{
      console.log("Added: ",addAlbum);
    });
  }

  getAlbums():void{
    this.albumService.getAlbums().subscribe(
      albums => {
        this.albums = albums;
        this.albums.map(album=>{album.isVisible=true;return album;})
        this.loaded = true;
        this.initForm();
        this.getAlbumByFilter();
      }
    );
  }

  getAlbumByFilter():void{
    this.searchService.searchValue.subscribe(()=>{{
      this.albums = this.searchService.getAlbumFiltredBySearch(this.albums);
    }})
  }

  deleteAlbum(album:Album):void{
    this.albums = this.albums.filter(a => {
      return a.id != album.id;
    })
    this.albumService.deleteAlbum(album).subscribe(deletedAlbum=>{
      console.log("Deleted: ",album);
    });
  }

}

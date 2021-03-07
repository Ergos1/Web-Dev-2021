import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Album } from 'src/assets/interfaces/album';
import { Photo } from 'src/assets/interfaces/photo';
import { Location } from "@angular/common";
@Component({
  selector: 'app-albums-detail',
  templateUrl: './albums-detail.component.html',
  styleUrls: ['./albums-detail.component.css']
})
export class AlbumsDetailComponent implements OnInit {

  album!:Album;
  loaded!:boolean;
  photos!:Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumsService, private router:Router, private location: Location) { }

  ngOnInit(): void {
    this.loaded = false;
    this.getAlbum();
  }

  getAlbum():void{
    let id = +(this.route.snapshot.paramMap.get('id')||0);
    this.albumService.getAlbum(id).subscribe(album => {
      this.album = album;
      this.getPhotos();
    })
  }

  getPhotos():void{
    this.albumService.getPhotos(this.album.id).subscribe(photos => {
      this.photos = [photos[0],photos[1],photos[2]];
      this.loaded = true;
    })
  }

  goToPhotos():void{
    this.router.navigate(["album", this.album.id, "photos"]);
  }

  goBack():void{
    this.location.back();
  }

  update():void{
    this.albumService.updateAlbum(this.album).subscribe((album) =>{
      console.log(album);
      // this.albumService.checkChange(album);
    })
  }

}

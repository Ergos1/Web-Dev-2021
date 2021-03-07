import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { Photo } from 'src/assets/interfaces/photo';
import { Location } from "@angular/common";

@Component({
  selector: 'app-albums-photos',
  templateUrl: './albums-photos.component.html',
  styleUrls: ['./albums-photos.component.css']
})
export class AlbumsPhotosComponent implements OnInit {

  selected!:string;
  photos!:Photo[];

  constructor(private route: ActivatedRoute, private albumService:AlbumsService, private location: Location) { }

  ngOnInit(): void {
    this.getPhotos();
    this.selected = "150x150";
  }

  getPhotos():void{ 
    let id = +(this.route.snapshot.paramMap.get("id")||0);
    this.albumService.getPhotos(id).subscribe(photos => {
      this.photos = photos;
    })
  }

  goBack():void{
    this.location.back();
  }

  onChange(newValue:string):void{
    this.selected = newValue;
  }
}

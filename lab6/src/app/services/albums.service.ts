import { Injectable } from '@angular/core';
import { Album } from "../../assets/interfaces/album";
import { Photo } from "../../assets/interfaces/photo";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


  readonly url: string = "https://jsonplaceholder.typicode.com/albums";

  options:HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json;'
  });


  constructor(private http: HttpClient) {}

  getAlbums():Observable<Album[]>{
    return this.http.get<Album[]>(this.url);
  }

  getAlbum(id: number):Observable<Album>{
    return this.http.get<Album>(this.url + "/" + id);
  }

  getPhotos(id:number):Observable<Photo[]>{
    return this.http.get<Photo[]>(`${this.url}/${id}/photos`);
  }

  updateAlbum(album:Album):Observable<Album>{
    return this.http.put<Album>(`${this.url}/${album.id}`, album, {headers:this.options});
  }

  deleteAlbum(album:Album):Observable<Album>{
    return this.http.delete<Album>(`${this.url}/${album.id}`);
  }

  addAlbum(album:Album):Observable<Album>{
    return this.http.post<Album>(`${this.url}`, album, {headers:this.options});
  }

}

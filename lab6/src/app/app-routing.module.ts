import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AlbumsDetailComponent } from './components/albums-detail/albums-detail.component';
import { AlbumsPhotosComponent } from './components/albums-photos/albums-photos.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'album', component:AlbumsComponent},
  {path:'album/:id', component:AlbumsDetailComponent},
  {path:'album/:id/photos', component:AlbumsPhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

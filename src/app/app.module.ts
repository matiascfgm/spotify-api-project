import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {ArtistaComponent} from './components/artist/artista.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {SearchComponent} from './components/search/search.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ArtistCardComponent } from './components/templates/artist-card/artist-card.component';
import { TrackCardComponent } from './components/templates/track-card/track-card.component';
import { AlbumCardComponent } from './components/templates/album-card/album-card.component';
import { PlaylistCardComponent } from './components/templates/playlist-card/playlist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistaComponent,
    NavbarComponent,
    SearchComponent,
    ArtistCardComponent,
    TrackCardComponent,
    AlbumCardComponent,
    PlaylistCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

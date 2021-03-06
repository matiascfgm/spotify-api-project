import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  newAlbums: any[] = [];

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        this.newAlbums = data;
      });
  }

}

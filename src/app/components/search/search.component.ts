import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  public term = 'Try searching an artist, album, song...';
  searchType = ['Artists', 'Tracks', 'Albums', 'Playlists'];
  public filter = 0;
  public results: any[];
  quantity = 5;

  constructor(private spotify: SpotifyService) {
  }

  ngOnInit() {
  }

  public search(term: string) {
    if (term === '') {
      this.results = undefined;
      return;
    }
    this.term = term;
    this.spotify.search(term, this.filter, this.quantity)
      .subscribe((data: any) => {
        console.log(data);
        this.results = data;
      });
  }
}

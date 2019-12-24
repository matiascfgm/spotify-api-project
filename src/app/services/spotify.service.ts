import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  public apiCall(query: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQALiCYVUIgR3vT9WxwxMGH79BmUJg_JVJAHpRuf8ApnKgV7Gn3JM8rOqQ5Xo-HdC7rixrihUs4ZY8Nj6qg',
    });
    const URL = 'https://api.spotify.com/v1/' + query;
    return this.http.get(URL, {headers});
  }

  public getNewReleases() {
    return this.apiCall('browse/new-releases')
      .pipe(map((data: any) => {
        return data.albums.items;
      }));
  }

  public search(term: string, filter: number) {
    const searchType = ['artist', 'track', 'album', 'playlist'];
    const query = 'search?q=' + term + '&type=' + searchType[filter] + '&limit=7';
    return this.apiCall(query)
      .pipe(map((data: any) => {
        console.log(data);
        return data.artists.items;
      }));
  }// @todo data. value of query
}

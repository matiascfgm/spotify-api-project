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
      Authorization: 'Bearer BQBqrV4v8fJYAB9b0ZmJnM86EFPVtBFvNfTzE5xvUcO_gj8h1l33EIUm4Mozme3o_hoSnMqFbUVRt7eZJBZiMmHklyc0_gJtwdSsViiByweV6Uyc0s_gDr5KsAqrJNlJRZoMmEmua1J259mhUl_tWk4mDbQLWy8',
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
    const result = searchType[filter] + 's';
    const query = 'search?q=' + term + '&type=' + searchType[filter] + '&limit=7';
    return this.apiCall(query)
      .pipe(map((data: any) => {
        return data[result].items;
      }));
  }
}

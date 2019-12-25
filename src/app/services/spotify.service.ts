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
      Authorization: 'Bearer BQB6FZ3aPJF0245xst34tHknNrju5-Ylie-lVl-mb-LmbT9esvIDUVJ9v_SNvmz9dzI2hjp3Hf0RpqmBf7k',
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

  public search(term: string, filter: number, quantity: number) {
    const searchType = ['artist', 'track', 'album', 'playlist'];
    const result = searchType[filter] + 's';
    const query = 'search?q=' + term + '&type=' + searchType[filter] + '&limit=' + quantity;
    return this.apiCall(query)
      .pipe(map((data: any) => {
        return data[result].items;
      }));
  }
}

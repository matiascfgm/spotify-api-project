import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  public getNewReleases() {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBZ4vFTnm4fwQMe34IZn8Cfsj1Qp1Jb2gptnp5_J6Ox3Pa-TcpqbOFuqttYIPnYOPiJZVFM6vDQfU3Ce0Q',
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe( map( (data: any) => {
        return data.albums.items;
      }));
  }

  public search(term: string) {
    const searchType = ['album', 'artist', 'playlist', 'track'];
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBZ4vFTnm4fwQMe34IZn8Cfsj1Qp1Jb2gptnp5_J6Ox3Pa-TcpqbOFuqttYIPnYOPiJZVFM6vDQfU3Ce0Q',
    });
    return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist&limit=5', {headers})
      .pipe( map( (data: any) => {
        return data.artists.items;
      }));
  }
}

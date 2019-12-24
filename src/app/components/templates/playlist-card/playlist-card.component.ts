import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-playlist-card',
  templateUrl: './playlist-card.component.html',
  styleUrls: ['./playlist-card.component.scss']
})
export class PlaylistCardComponent implements OnInit {
  @Input()
  public results: Observable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}

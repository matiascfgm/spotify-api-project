import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-track-card',
  templateUrl: './track-card.component.html',
  styleUrls: ['./track-card.component.scss']
})
export class TrackCardComponent implements OnInit {
  @Input()
  public results: Observable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}

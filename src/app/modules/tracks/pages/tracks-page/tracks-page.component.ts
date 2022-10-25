import { Subscription } from 'rxjs';
import { TrackService } from './../services/track.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit , OnDestroy {

  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private TrackService: TrackService) { }

  ngOnInit(): void {
    this.TrackService.getAllTracks$()
    .subscribe((response : TrackModel[]) => {
      this.tracksTrending = response
    })

    this.TrackService.getAllRandom$()
    .subscribe((response : TrackModel[]) => {
      this.tracksRandom = response
    })
  }

  ngOnDestroy(): void {
  }
}

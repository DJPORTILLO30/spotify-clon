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
    const observer1$  = this.TrackService.dataTracksTrending$
    .subscribe(response =>{
      this.tracksTrending  = response
      this.tracksRandom = response
     console.log('Canciones trending .... ' , response)
    })


    const observer2$  = this.TrackService.dataTracksRadom$
    .subscribe(response =>{
      this.tracksRandom  = [...this.tracksRandom,...response]
     console.log('Cancion random entrando, .... ' , response)
    })

    this.listObservers$ = [observer1$ , observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  }
}

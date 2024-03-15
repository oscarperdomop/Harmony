import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITrack } from 'src/app/interfaces/ITrack';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { newTrack } from 'src/app/shared/factories';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  bannerImg = '';
  bannerText = '';
  numberOfItems = 0;
  totalTime = '';

  screenWidth = window.innerWidth;

  tracks: ITrack[] = [];
  currentTrack: ITrack = newTrack();

  subs: Subscription[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) {}

  ngOnInit() {
    this.getPlaylistData();
  }

  ngOnDestroy() {
    this.subs.forEach((s) => s.unsubscribe());
  }

  getArtists(track: ITrack) {
    return track.artists.map((artist) => artist.name).join(', ');
  }

  async getData(type: string, id: string) {
    if (type === 'playlist') {
      await this.getPlaylistData(id);
    }
  }

  getPlaylistData(id?: string) {
    this.spotifyService.getPlaylistTracksById().subscribe({
      next: (response) => {
        this.defineData(response.image, response.name, response.tracks);
      },
    });
  }

  defineData(bannerImg: string, bannerText: string, tracks: ITrack[]) {
    this.bannerImg = bannerImg;
    this.bannerText = bannerText;
    this.tracks = tracks;
  }
}

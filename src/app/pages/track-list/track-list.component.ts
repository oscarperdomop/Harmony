import { Component, OnDestroy, OnInit } from '@angular/core';
import { ITrack } from '../../interfaces/ITrack';
import { newTrack } from '../../shared/factories';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss'],
})
export class TrackListComponent implements OnInit, OnDestroy {
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

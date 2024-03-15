import {Component, OnInit} from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {IArtist} from "../../interfaces/IArtist";
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {

  artists: IArtist[] = [];

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getTopArtists();
  }

  getTopArtists() {
    this.spotifyService.getTopArtists().subscribe({
      next: (response) => {
        this.artists = response;
      }
    });
  }

  goToArtist(artistId: string) {
    this.router.navigateByUrl(`/player/list/artist/${artistId}`);
  }

}

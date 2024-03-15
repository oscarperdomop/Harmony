import {Component, Input, OnInit} from '@angular/core';
import {IPlaylist} from "../../interfaces/IPlaylist";
import {SpotifyService} from "../../services/spotify.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  playlists: IPlaylist[] = [];

  @Input('matTooltip')
  tooltip: string = 'Hello World';

  constructor(
    private router: Router,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.getPlaylists();
  }

  async getPlaylists() {
    this.spotifyService.getPlaylists().subscribe({
      next: (response) => {        
        this.playlists = response;
      }
    });    
  }

  goToPlaylist(playlistId: string) {
    this.router.navigateByUrl(`/player/list/playlist/${playlistId}`);
  }

}

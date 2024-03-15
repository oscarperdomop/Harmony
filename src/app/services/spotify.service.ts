import { Injectable } from '@angular/core';
import { SpotifyConfig } from '../../environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { Router } from '@angular/router';
import {
  SpotifyAlbumToAlbum,
  SpotifyArtistToArtist,
  SpotifyPlaylistToPlaylist,
  SpotifySinglePlaylistToPlaylist,
  SpotifyTrackToTrack,
  SpotifyUserToUser,
} from '../shared/SpotifyHelper';
import { IPlaylist } from '../interfaces/IPlaylist';
import { IArtist } from '../interfaces/IArtist';
import { ITrack } from '../interfaces/ITrack';

import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  spotifyApi: Spotify.SpotifyWebApiJs = null;
  user: IUser;

  constructor(private router: Router, private http: HttpClient) {
    this.spotifyApi = new Spotify();
  }

  getUser() {
    return this.http.get<IUser>(`assets/mock-data/user.json`);
  }

  getLoginUrl() {}

  getPlaylists(): Observable<any> {
    return this.http.get<IPlaylist[]>(`assets/mock-data/playlist.json`);
  }

  getPlaylistTracksById(): Observable<any> {
    return this.http.get<IPlaylist>(`assets/mock-data/playlist-id.json`);
  }

  getTopArtists(limit = 6): Observable<any> {
    return this.http.get<IArtist[]>(`assets/mock-data/artist.json`);
  }

  getTracks(): Observable<any> {
    return this.http.get<ITrack[]>(`assets/mock-data/track.json`);
  }

  getTracksById(): Observable<any> {
    return this.http.get<ITrack>(`assets/mock-data/track-id.json`);
  }

  async playTrack(track: ITrack) {
    await this.spotifyApi.play({
      uris: [track.uri],
      device_id: '',
    });
  }

  // async getPlayingTrack(): Promise<ITrack> {
  //   const track = await this.spotifyApi.getMyCurrentPlayingTrack();
  //   return SpotifyTrackToTrack(track.item);
  // }

  // async back() {
  //   await this.spotifyApi.skipToPrevious();
  // }

  // async next() {
  //   await this.spotifyApi.skipToNext();
  // }

  logout() {
    //localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

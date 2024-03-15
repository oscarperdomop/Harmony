import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { playerRoutes } from './player.routes';

import { MatIconModule } from '@angular/material/icon';

import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { MenuButtonComponent } from '../../components/menu-button/menu-button.component';
import { UserFooterComponent } from '../../components/user-footer/user-footer.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistComponent } from '../../components/top-artist/top-artist.component';
import { RightPanelComponent } from '../../components/right-panel/right-panel.component';
import { MatMenuModule } from '@angular/material/menu';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { PlayCardComponent } from '../../components/play-card/play-card.component';
import { TrackListComponent } from '../track-list/track-list.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { TopMusicComponent } from 'src/app/components/top-music/top-music.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPanelComponent,
    RightPanelComponent,
    MenuButtonComponent,
    UserFooterComponent,
    HomeComponent,
    TopArtistComponent,
    NavBarComponent,
    PlayCardComponent,
    TrackListComponent,
    SearchComponent,
    TopMusicComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(playerRoutes),
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    MatIconModule,
  ],
})
export class PlayerModule {}

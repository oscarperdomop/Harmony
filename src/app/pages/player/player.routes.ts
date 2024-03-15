import {Routes} from "@angular/router";
import {PlayerComponent} from "./player.component";
import {HomeComponent} from "../home/home.component";
import {TrackListComponent} from "../track-list/track-list.component";
import { SearchComponent } from "src/app/components/search/search.component";
import { TopMusicComponent } from "src/app/components/top-music/top-music.component";

export const playerRoutes: Routes = [
  {
    path: '',
    component: PlayerComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'list/:type/:id',
        component: TrackListComponent
      },
      {
        path: 'search',
        component:SearchComponent
      },
      {
        path: 'top-music',
        component:TopMusicComponent
      },
    ],
  },
];

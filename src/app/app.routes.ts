import {Routes} from "@angular/router";
import { SearchComponent } from "./components/search/search.component";
import { TopMusicComponent } from "./components/top-music/top-music.component";
import { HomeComponent } from "./pages/home/home.component";
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'player',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'player',
    loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule)
  }
];

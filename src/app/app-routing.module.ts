import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent } from './artist-setup/components/artist-details/artist-details.component';
import { SearchArtistComponent } from './artist-setup/components/search-artist/search-artist.component';

const routes: Routes = [
  { path: '', component: SearchArtistComponent },
  { path: 'artist-details', component: ArtistDetailsComponent },
  { path: '**', component: SearchArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

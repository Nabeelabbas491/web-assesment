import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../../artist-interface';
import { ArtistsService } from '../../artists.service';
import { No_Record_Found } from '../../common.constant';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.component.html',
  styleUrls: ['./search-artist.component.scss'],
})
export class SearchArtistComponent implements OnInit {
  artists = new MatTableDataSource<Artist>();
  noResultFound = '';

  constructor(
    private artistService: ArtistsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.preserveSearchedArtist();
  }

  fetchArtist(data: string) {
    let artist = JSON.parse(sessionStorage.getItem(data)!);
    if (artist) {
      this.artists = new MatTableDataSource<Artist>();
      this.artists.data.push(artist);
      return;
    }
    data.length &&
      this.artistService.getArtist(data).subscribe((response: any) => {
        this.artists = new MatTableDataSource<Artist>();
        response
          ? this.artists.data.push(response)
          : (this.noResultFound = No_Record_Found);

        response &&
          sessionStorage.setItem(response['name'], JSON.stringify(response));
      });
  }

  preserveSearchedArtist() {
    this.route.queryParams.subscribe((res) => {
      if (Object.keys(res).length !== 0) {
        this.artists = new MatTableDataSource<Artist>();
        let data = JSON.parse(res.artist);
        this.artists.data.push(data);
      }
    });
  }
}

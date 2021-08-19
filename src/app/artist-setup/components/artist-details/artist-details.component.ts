import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../artist-interface';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit {
  artist: Artist;
  artistDetails = new MatTableDataSource<Artist>();
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.fetchArtistDetails();
  }

  fetchArtistDetails() {
    this.route.queryParams.subscribe((res) => {
      this.artist = JSON.parse(res.artist);
      let events = JSON.parse(res.events);
      this.artistDetails = new MatTableDataSource<Artist>(events);
    });
  }

  navigateBack() {
    this.router.navigate([''], {
      queryParams: {
        artist: JSON.stringify(this.artist),
      },
      skipLocationChange: true,
    });
  }

  applyFilter(filterValue: String) {
    this.artistDetails.filteredData = this.artistDetails.data.filter(
      (items) => {
        return (
          items?.venue?.city.toLowerCase().indexOf(filterValue.toLowerCase()) >
          -1
        );
      }
    );
  }
}

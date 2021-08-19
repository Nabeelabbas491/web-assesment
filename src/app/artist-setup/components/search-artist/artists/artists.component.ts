import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from 'src/app/artist-setup/artist-interface';
import { ArtistsService } from 'src/app/artist-setup/artists.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
})
export class ArtistsComponent implements OnInit {
  @Input() artist: Artist;

  constructor(private router: Router, private artistService: ArtistsService) {}

  ngOnInit() {}

  getEventsDetails() {
    let events = JSON.parse(
      sessionStorage.getItem(this.artist.name + '{Events}')!
    );
    if (events) {
      this.navigateToEventsDetails(this.artist, events);
      return;
    }
    this.artistService
      .getEvents(this.artist.name, 'all')
      .subscribe((response) => {
        response &&
          sessionStorage.setItem(
            this.artist.name + '{Events}',
            JSON.stringify(response)
          );
        this.navigateToEventsDetails(this.artist, response);
      });
  }

  navigateToEventsDetails(artist: Artist, eventSource: any) {
    this.router.navigate(['/artist-details'], {
      queryParams: {
        artist: JSON.stringify(artist),
        events: JSON.stringify(eventSource),
      },
      skipLocationChange: true,
    });
  }
}

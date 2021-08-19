import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artist } from './artist.enum';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  /**fetching an artist */

  getArtist(artist_Name: string) {
    let url = `${this.baseUrl + Artist.GetArtist + artist_Name}?app_id=app_id`;
    return this.http.get(url);
  }

  /**Fetching events related to provided artist */

  getEvents(artist_Name: string, date?: string) {
    let url = `${
      this.baseUrl + Artist.GetArtist + artist_Name
    }/events?app_id=app_id${date ? `&date=${date}` : ''}`;
    return this.http.get(url);
  }
}

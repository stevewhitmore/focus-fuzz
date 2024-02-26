import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AudioFileModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  constructor(private http: HttpClient) { }

  getSoundFiles(): Observable<AudioFileModel[]> {
    return this.http.get('assets/files-list.json')
    .pipe(
      map((sounds: any) => sounds.filter((sound: any) => sound.id === 1)), //  This is all I need right now
    )
  }
}

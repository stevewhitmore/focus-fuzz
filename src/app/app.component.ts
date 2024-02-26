import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SoundService } from './sound.service';
import { PlayStatusModel, AudioFileModel } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  playStatus: PlayStatusModel = { isPaused: true };
  audioFiles$: Observable<AudioFileModel[]> = new Observable();

  constructor(private soundService: SoundService) { }

  ngOnInit() {
    this.audioFiles$ = this.soundService.getSoundFiles();
  }

  playPause() {
    this.playStatus = { isPaused: !this.playStatus.isPaused };
  }
}

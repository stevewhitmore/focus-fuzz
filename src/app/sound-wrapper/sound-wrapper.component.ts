import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AudioFileModel, PlayStatusModel } from '../models';

@Component({
  selector: 'ff-sound-wrapper',
  templateUrl: './sound-wrapper.component.html',
  styleUrls: ['./sound-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoundWrapperComponent implements OnChanges {
  @Input() audioFile!: AudioFileModel;
  @Input() playStatus!: PlayStatusModel;
  volume = new FormControl();
  sound: HTMLAudioElement = new Audio();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioFile']) {
      this.setSoundProperties(changes['audioFile'].currentValue);
    }

    this.togglePlayPause(changes['playStatus'].currentValue);
  }

  setSoundProperties(audioFileChanges: any) {
    if (audioFileChanges && audioFileChanges.source) {
      this.sound = new Audio(audioFileChanges.source);
      this.sound.loop = true;
      this.sound.volume = 1;

    }
  }

  togglePlayPause(playStatus: any) {
    playStatus.isPaused ? this.sound.pause() : this.sound.play();
  }

}

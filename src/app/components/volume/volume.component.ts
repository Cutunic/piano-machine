import { Component, OnInit} from '@angular/core';
import { PianoService } from '../../services/piano.service'

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  volumeValue: number;

  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this. volumeValue = this.pianoService.getVolume();
  }
  onVolumeChange(){
    console.log('volumeValue :', this.volumeValue);
    this.pianoService.setVolume(this.volumeValue);
  }
}

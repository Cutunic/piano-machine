import { Component, OnInit, Input } from '@angular/core';
import { PianoService } from '../../services/piano.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css'],
})
export class KeyComponent implements OnInit {
  @Input() key: any;

  constructor( private pianoService: PianoService) { }

  ngOnInit() {
  }

  playAudio(){
    this.pianoService.playAudio(this.key.value);
  }
}

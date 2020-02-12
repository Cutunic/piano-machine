import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PianoService } from '../../services/piano.service';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  @Input() key: any;
  @HostListener('window: keydown', ['$event'])
  handleKeypress(event: KeyboardEvent){
    console.log('onKey() value: ', event.key);
    this.pianoService.playAudio(this.key.value, event.key);
  }
  
  constructor( private pianoService: PianoService) { }

  ngOnInit() {
    
  }

  playAudio(){
    this.pianoService.playAudio(this.key.value);
  }
}

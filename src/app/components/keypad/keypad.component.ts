import { Component, OnInit, HostListener } from '@angular/core';
import { PianoService } from '../../services/piano.service'

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  scaleSize: string = 'smal';
  scale: any[];

    // need to create Subject and observable in Service on size; then i can observe changes on scaleSize
  @HostListener('window: keydown', ['$event'])
  handleKeypress(event: KeyboardEvent){
    let keyValue: string = this.pianoService.getKeyValueOnPress(event.key);
    this.toogleKeyActive(keyValue);
    this.pianoService.playAudio(keyValue);
  }

  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this.scale = this.pianoService.getScale(this.scaleSize);
    console.log('keypad size: ',this.scaleSize,' keypad scale: ',this.scale);
  }

  toogleKeyActive(targetKey:string){
    let classColor: string;
    
    if (targetKey[1]==='-'){ classColor = 'active-black';
    } else { classColor = 'active-white';}
    
    document.getElementById(targetKey).classList.add(classColor);
    setTimeout(() => {
      document.getElementById(targetKey).classList.remove(classColor);
    }, 350);
  }
}

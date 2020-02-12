import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../services/piano.service'

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  scaleSize: string = 'smal';
  scale: any[];
  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this.scale = this.pianoService.getScale(this.scaleSize);
    console.log('keypad size: ',this.scaleSize,' keypad scale: ',this.scale);
  }

}

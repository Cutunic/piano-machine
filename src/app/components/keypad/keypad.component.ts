import { Component, OnInit, OnChanges, HostListener } from '@angular/core';
import { PianoService } from '../../services/piano.service'

@Component({
  selector: 'app-keypad',
  templateUrl: './keypad.component.html',
  styleUrls: ['./keypad.component.css']
})
export class KeypadComponent implements OnInit {
  scaleSize: string;
  scale: any[];
  width: number;
  resizedToSmall: boolean = false;
  resizedToBig: boolean = false;

    // need to create Subject and observable in Service on size; then i can observe changes on scaleSize
  @HostListener('window: keydown', ['$event'])
  handleKeypress(event: KeyboardEvent){
    let keyValue: string = this.pianoService.getKeyValueOnPress(event.key);
    this.toogleKeyActive(keyValue);
    this.pianoService.playAudio(keyValue);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.outerWidth;
    this.onWindowResize();
  }

  constructor(private pianoService: PianoService) { 
    this.pianoService.sizeObs.subscribe(value=>{
      this.scaleSize = value;
      this.scale = this.pianoService.getScale(this.scaleSize);
    })
  }

  ngOnInit() {
    this.scale = this.pianoService.getScale(this.scaleSize);
    this.width = window.outerWidth;
    this.onWindowResize();
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
  onWindowResize(){
    if ((this.width<501)&&(this.resizedToSmall===false)){
      this.pianoService.setSize('small');
      this.resizedVariable();
    } else if ((this.width>501)&&(this.resizedToBig===false)){
      this.pianoService.setSize('big');
      this.resizedVariable();
    }
  }
  resizedVariable(){
    if (this.scaleSize=='small'){
      this.resizedToSmall = true;
      this.resizedToBig = false;
    } else if (this.scaleSize==='big'){
      this.resizedToSmall = false;
      this.resizedToBig = true;
    }
  }
}

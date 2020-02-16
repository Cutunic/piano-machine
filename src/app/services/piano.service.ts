import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PianoService {
  smallScale: any[] = [{"value":'c3'},{"value":'c-3'},{"value":'d3'},{"value":'d-3'},{"value":'e3'},{"value":'f3'},{"value":'f-3'},{"value":'g3'},{"value":'g-3'},{"value":'a3'},{"value":'a-3'},{"value":'b3'}];
  bigScale: any[] = [{"value": 'c3'},{"value":'c-3'},{"value":'d3'},{"value":'d-3'},{"value":'e3'},{"value":'f3'},{"value":'f-3'},{"value":'g3'},{"value":'g-3'},{"value":'a3'},{"value":'a-3'},{"value":'b3'},{"value": 'c4'},{"value":'c-4'},{"value":'d4'},{"value":'d-4'},{"value":'e4'},{"value":'f4'},{"value":'f-4'},{"value":'g4'},{"value":'g-4'},{"value":'a4'},{"value":'a-4'},{"value":'b4'}];
  volume: number = 20;
  power: boolean = true;
  size: string = 'big';

  private _size: Subject<string> = new Subject;
  public sizeObs = this._size.asObservable();

  constructor() { 
    this._size.next(this.size);
  }
  
  getScale(scaleSize:string){
    if (scaleSize==='small'){
      return this.smallScale;
    } else {
      return this.bigScale;
    }
  }

  playAudio(keyValue: string,){
    if (this.power){
      let path = this.createPath(keyValue);
      this.pianoPlay(path);
    }
    
  }
  getKeyValueOnPress(keyEvent: string){
    let keyValue: string;
    switch(keyEvent){
      case 'q' : keyValue='c3'; break;
      case '1' : keyValue='c-3'; break;
      case 'w' : keyValue='d3'; break;
      case '2' : keyValue='d-3'; break;
      case 'e' : keyValue='e3'; break;
      case 'r' : keyValue='f3'; break;
      case '4' : keyValue='f-3'; break;
      case 't' : keyValue='g3'; break;
      case '5' : keyValue='g-3'; break;
      case 'y' : keyValue='a3'; break;
      case '6' : keyValue='a-3'; break;
      case 'u' : keyValue='b3'; break;

      case 'z' : keyValue='c4'; break;
      case 's' : keyValue='c-4'; break;
      case 'x' : keyValue='d4'; break;
      case 'd' : keyValue='d-4'; break;
      case 'c' : keyValue='e4'; break;
      case 'v' : keyValue='f4'; break;
      case 'g' : keyValue='f-4'; break;
      case 'b' : keyValue='g4'; break;
      case 'h' : keyValue='g-4'; break;
      case 'n' : keyValue='a4'; break;
      case 'j' : keyValue='a-4'; break;
      case 'm' : keyValue='b4'; break;
    }
    return keyValue;
  }
  
  createPath(keyName: string){
    return ('../../assets/piano-keys/'+keyName+'.mp3');
  }
  pianoPlay(path: string){
    let audio = new Audio();
    audio.src = path;
    audio.volume = (this.volume/100);
    audio.play();
  }
  
  setVolume(value: number){
    this.volume = value;
    console.log('volume in Service :', this.volume);
  }
  setPower(value: boolean){
    this.power = value;
    console.log('power in Service :', this.power);
  }
  setSize(value: string){
    this.size = value;
    this._size.next(value);
    console.log('size in Service :', this.size);
  }
  getVolume(){
    return this.volume;
  }
  getPower(){
    return this.power;
  }
  getSize(){
    return this.size;
  }
  
}

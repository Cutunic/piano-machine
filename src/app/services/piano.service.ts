import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PianoService {
  smallScale: any[] = [{"value":'c3'},{"value":'c-3'},{"value":'d3'},{"value":'d-3'},{"value":'e3'},{"value":'f3'},{"value":'f-3'},{"value":'g3'},{"value":'g-3'},{"value":'a3'},{"value":'a-3'},{"value":'b3'}];
  bigScale: any[] = [{"value": 'c3'},{"value":'c-3'},{"value":'d3'},{"value":'d-3'},{"value":'e3'},{"value":'f3'},{"value":'f-3'},{"value":'g3'},{"value":'g-3'},{"value":'a3'},{"value":'a-3'},{"value":'b3'},{"value": 'c4'},{"value":'c-4'},{"value":'d4'},{"value":'d-4'},{"value":'e4'},{"value":'f4'},{"value":'f-4'},{"value":'g4'},{"value":'g-4'},{"value":'a4'},{"value":'a-4'},{"value":'b4'}];
  
  constructor() { }
  
  getScale(scaleSize:string){
    console.log('getScale service: ', scaleSize);
    if (scaleSize==='small'){
      return this.smallScale;
    } else {
      return this.bigScale;
    }
  }

  playAudio(keyValue: string, keyEvent? :string){
    let path = '../../assets/piano-keys/'+keyValue+'.mp3';
    console.log('keyValu in service :',keyValue, '  path : ' + path);
    console.log('keyEvent in service :',keyEvent);
    
    if (keyEvent==undefined){
      this.pianoPlay(path)
    } else if (keyEvent){
      this.handlePlayAudio(path,keyValue, keyEvent)
    }
  }
  handlePlayAudio(path: string,keyValue: string, keyEvent: string){
      if (
        ((keyEvent==='q')&&(keyValue==='c3')) ||
        ((keyEvent==='1')&&(keyValue==='c-3')) ||
        ((keyEvent==='w')&&(keyValue==='d3')) ||
        ((keyEvent==='2')&&(keyValue==='d-3')) ||
        ((keyEvent==='e')&&(keyValue==='e3')) ||
        ((keyEvent==='r')&&(keyValue==='f3')) ||
        ((keyEvent==='4')&&(keyValue==='f-3')) ||
        ((keyEvent==='t')&&(keyValue==='g3')) ||
        ((keyEvent==='5')&&(keyValue==='g-3')) ||
        ((keyEvent==='y')&&(keyValue==='a3')) ||
        ((keyEvent==='6')&&(keyValue==='a-3')) ||
        ((keyEvent==='u')&&(keyValue==='b3'))
        ){
        console.log('onKey(a) value: ', keyValue);
        this.pianoPlay(path);
    } else if (
        ((keyEvent==='z')&&(keyValue==='c4')) ||
        ((keyEvent==='s')&&(keyValue==='c-4')) ||
        ((keyEvent==='x')&&(keyValue==='d4')) ||
        ((keyEvent==='d')&&(keyValue==='d-4')) ||
        ((keyEvent==='c')&&(keyValue==='e4')) ||
        ((keyEvent==='v')&&(keyValue==='f4')) ||
        ((keyEvent==='g')&&(keyValue==='f-4')) ||
        ((keyEvent==='b')&&(keyValue==='g4')) ||
        ((keyEvent==='h')&&(keyValue==='g-4')) ||
        ((keyEvent==='n')&&(keyValue==='a4')) ||
        ((keyEvent==='j')&&(keyValue==='a-4')) ||
        ((keyEvent==='m')&&(keyValue==='b4'))
              ){
        console.log('onKey(a) value: ', keyValue);
        this.pianoPlay(path);
    }
  }
  pianoPlay(path: string){
    console.log('playAudio() :')
    let audio = new Audio();
    audio.src = path;
    audio.volume = 0.5;
    audio.play();
  }
}

import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../services/piano.service';

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent implements OnInit {
  size: string;

  constructor(private pianoService: PianoService) { 
    this.pianoService.sizeObs.subscribe(value=>{
      this.size = value;
    });
    console.log('this.size',this.size);
  }

  ngOnInit() {
    this.size = this.pianoService.getSize();
  }

  
}

import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../services/piano.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  size: string;

  constructor(private pianoService: PianoService) { 
    this.pianoService.sizeObs.subscribe(value=>{
      this.size = value;
    })
  }

  ngOnInit() {
  }

  onSizeChange(value: string){
    this.size = value;
    this.pianoService.setSize(this.size);
  }
}

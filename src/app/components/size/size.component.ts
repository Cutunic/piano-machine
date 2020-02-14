import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../services/piano.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {
  size: string;

  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this.size = this.pianoService.getSize();
    console.log('onInit Size in size : ',this.size);
  }
  onSizeChange(value: string){
    this.size = value;
    this.pianoService.setSize(this.size);
    console.log(value);
  }
}

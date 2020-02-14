import { Component, OnInit } from '@angular/core';
import { PianoService } from '../../services/piano.service';
@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  power: boolean;
  constructor(private pianoService: PianoService) { }

  ngOnInit() {
    this.power = this.pianoService.getPower();
    this.classActiveInit();
  }

  onClickPower(){
    this.power = !this.power;
    document.getElementsByClassName('switch-circle')[0].classList.toggle('switch-on');
    document.getElementsByClassName('switch-circle')[0].classList.toggle('switch-off');
    this.pianoService.setPower(this.power);
  }

  classActiveInit(){
    if (this.power){
      document.getElementsByClassName('switch-circle')[0].classList.add('switch-on');
      document.getElementsByClassName('switch-circle')[0].classList.remove('switch-off');
    } else {
      document.getElementsByClassName('switch-circle')[0].classList.remove('switch-on');
      document.getElementsByClassName('switch-circle')[0].classList.add('switch-off');
    }
  }
}

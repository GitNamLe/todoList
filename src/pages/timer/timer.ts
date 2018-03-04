import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {
  startpause = "Start";
  running = 0;
  secs: any = 0;
  mins: any = 1;
  hours: any = 0;
  clock = this.hours + "h " + this.mins + "m " + this.secs + "s";

  SecondsTotal: number = this.secs + this.mins*60 + this.hours*3600;

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {
  }
  
  onStart(){
    if(this.running == 0){
      this.running = 1;
      this.reduction();
      this.startpause = "Pause";
    }
    else{
      this.running = 0;
      this.startpause = "Resume";      
    }
  }

  onReset(){   
    this.running = 0;
    this.startpause = "Start";
    this.SecondsTotal = this.secs + this.mins*60 + this.hours*3600;
    this.clock = this.hours + "h " + this.mins + "m " + this.secs + "s ";
  }

  reduction(){
    if(this.running == 1){
      setTimeout(() => {
        let hours: any = Math.floor(this.SecondsTotal/3600);
        let mins: any = Math.floor(this.SecondsTotal % 3600 / 60);
        let secs: any = this.SecondsTotal % 60;
        this.SecondsTotal--

        if(hours < 10){
          hours = "0" + hours;
        }
        if(mins < 10){
          mins = "0" + mins;
        }
        if(secs < 10){
          secs = "0" + secs;
        }
        this.clock = hours + ":" + mins + ":" + secs;
        if(this.clock != '00:00:00'){
          this.reduction();
        }

      }, 1000)
    }
  }

  onTimerChange(){
    this.running = 0;
    this.startpause = "Resume"
    let modal = this.modalCtrl.create('TimerModalPage');
    modal.present();
    modal.onDidDismiss(data => {
      if(data === undefined){
        console.log('cancel');
      }
      else{
      this.running = 0;
      this.startpause = "start"
      this.secs = Number(data.form.value.seconds);
      this.mins = Number(data.form.value.minutes);
      this.hours = Number(data.form.value.hours);
      this.SecondsTotal = this.secs + this.mins * 60 + this.hours * 3600; 
      this.clock = this.hours + "h " + this.mins + "m " + this.secs + "s";
      }
    })
  }
}

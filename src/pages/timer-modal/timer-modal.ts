import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-timer-modal',
  templateUrl: 'timer-modal.html',
})
export class TimerModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  onDismiss(form: NgForm){
    this.viewCtrl.dismiss({form: form});
  }

  onCancelDismiss(){
    this.viewCtrl.dismiss();
  }
}

import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-tasks-modal',
  templateUrl: 'tasks-modal.html',
})
export class TasksModalPage {

  constructor(private viewCtrl: ViewController) {}

  onDismiss(form: NgForm){
    this.viewCtrl.dismiss(form);
  }

}

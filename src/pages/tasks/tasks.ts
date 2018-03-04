import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';

import { TasksModalPage } from '../tasks-modal/tasks-modal';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  // date for example task that renders right away
  week = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  n = new Date();

  tasks = [{
    task: "Wow! A todo list app AND A TIMER!",
    finish: false,
    date: this.week[this.n.getDay() - 1]
  }]
  constructor(private modalCtrl: ModalController) {}

  onAddTask(){
    let modal =this.modalCtrl.create(TasksModalPage);
    modal.present();

    modal.onDidDismiss((data) => {
      if(data.form.value.task.length > 0){
        // new date for the task made
        let d = new Date();
        let day = d.getDay();

        this.tasks.push({
          task: data.form.value.task,
          finish: false,
          date: this.week[day - 1]
        })
      }
    })
  }

  onDelete(index: number){
    this.tasks.splice(index, 1);
  }

  onChecked(task){
    task.finish = !task.finish;
  }

}

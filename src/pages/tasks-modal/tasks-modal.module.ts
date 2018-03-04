import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksModalPage } from './tasks-modal';

@NgModule({
  declarations: [
    TasksModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksModalPage),
  ],
})
export class TasksModalPageModule {}

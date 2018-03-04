import { Component } from '@angular/core';

import { TasksPage } from '../tasks/tasks';
import { TimerPage } from '../timer/timer';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TasksPage;
  tab2Root = TimerPage;

  constructor() {

  }
}

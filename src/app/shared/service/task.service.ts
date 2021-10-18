import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Task} from '../../home/models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public tasksSubject = new BehaviorSubject<Task[]>(this.initValues());

  public selectedTaskSubject = new BehaviorSubject<Task>(null);

  public showLoaderSubject = new BehaviorSubject<boolean>(false);

  constructor() {}

  initValues(): Task[] {
    let list: Task[] = [];
    list.push(new Task('have breakfast', 100, 0));
    list.push(new Task('drink tea', 200, 1));
    list.push(new Task('wash teeth', 300, 2));

    return list;
  }

// újként lementi a paraméterként bejövő task-ot a listába
// egy üres listába lekérjük az eddigi elemeket, majd betesszük az újat
// végül frissítjük a megfigyelt listát a .next() paranccsal
  saveTask(task: Task) {
    let list: Task[] = [];

    Object.assign(list, this.tasksSubject.value);

    list.push(task);

    this.tasksSubject.next(list);
  }

  deleteTask(task: Task) {
    let list: Task[] = [];

    for (let i = 0; i < this.tasksSubject.value.length; i++) {
      if (task.id != this.tasksSubject.value[i].id) {
        list.push(this.tasksSubject.value[i]);
      }
    }

    this.tasksSubject.next(list);

    this.selectedTaskSubject.next(null);
  }
}

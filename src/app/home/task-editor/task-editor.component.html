import { Component, OnInit } from '@angular/core';
import {Task} from '../models/task';
import {TaskService} from '../../shared/service/task.service';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmModalComponent} from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  greetings: string = 'Check out my tasks!';
  showGreetings: boolean = true;

  tasks: Task[] = [];

  selectedTask: Task = null;
  showCompletedTasks: boolean = true;

  constructor(private taskService: TaskService, private dialog: MatDialog) {

    this.taskService.tasksSubject.subscribe((data: Task[])=> {
      this.tasks = data;
    });

    this.taskService.selectedTaskSubject.subscribe((t: Task)=> {
      this.selectedTask = t;
    });
  }

  ngOnInit() {
  }

  onSelectTask(task: Task) {
    if (this.selectedTask != null && this.selectedTask.id == task.id) {
      task = null;
    }

    this.taskService.selectedTaskSubject.next(task);
  }

  onDelete(task: Task) {
    const dialogConfig = {
      hasBackdrop: true,
      width: '60vh',
      data: {
        title: 'Confirmation required',
        question: 'Are you sure you want to delete: ' + task.name
      }
    }

    const dialogRef = this.dialog.open(ConfirmModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((confirm: boolean) => {
      if (confirm) {
        this.taskService.deleteTask(task);
      }
    });
  }

  onCheck(task: Task) {
    task.completed = !task.completed;
  }

  displayTask(task: Task): boolean {
    if (this.showCompletedTasks) {
      return true;
    }

    return !task.completed;
  }

  getTaskDate(task: Task) {
    return new Date(task.creationDate);
  }
}

/*
  onChangeVisibility() {
    this.showGreetings = !this.showGreetings;
  }
*/

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TaskService} from '../../shared/service/task.service';
import {Task} from '../models/task';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.scss']
})
export class TaskEditorComponent implements OnInit {

  taskForm: FormGroup;
  selectedTask: Task;
  editedTask: Task;

  constructor(private fb: FormBuilder, private taskService: TaskService) {

    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      priority: ['', Validators.required]
    });

    this.taskService.selectedTaskSubject.subscribe((t: Task)=> {
      this.selectedTask = t;

      this.editedTask = new Task();
      if (this.selectedTask == null) {
        this.taskForm.controls['name'].patchValue('');
      } else {
        Object.assign(this.editedTask, t);
        this.taskForm.controls['name'].patchValue(this.editedTask.name);
      }
      this.taskForm.controls['priority'].patchValue(this.editedTask.priority);
    });
  }

  ngOnInit() {
  }

  onSaveTask() {
    // ezzel próbáltuk ki a loadert
    //this.taskService.showLoaderSubject.next(true);

    if (!this.taskForm.valid) {
      alert("ErRoR!");
      return;
    }

    if (this.selectedTask) {
      this.selectedTask.name = this.taskForm.controls['name'].value;
      this.selectedTask.priority = this.taskForm.controls['priority'].value;
    } else {
      let newTask = new Task(this.taskForm.value.name, null, this.editedTask.priority);
      this.taskService.saveTask(newTask);
    }

    this.taskService.selectedTaskSubject.next(null);
    //adott mező ürítése:
    //this.taskForm.controls['name'].patchValue('');
    // összes mező lenullázása:
    this.taskForm.reset();
    this.taskForm.controls['priority'].patchValue(new Task().priority);
  }

  onChangePriority(newPriority: number) {
    this.taskForm.controls['priority'].patchValue(newPriority);

    if (this.editedTask) {
      this.editedTask.priority = newPriority;
    }
  }
}

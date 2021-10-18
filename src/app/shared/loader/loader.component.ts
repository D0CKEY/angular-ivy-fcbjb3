import { Component, OnInit } from '@angular/core';
import {TaskService} from '../service/task.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoader: boolean;

  constructor(private taskService: TaskService) {
    this.taskService.showLoaderSubject.subscribe((data: boolean) => {
      this.showLoader = data;
    });
  }

  ngOnInit() {
  }

}

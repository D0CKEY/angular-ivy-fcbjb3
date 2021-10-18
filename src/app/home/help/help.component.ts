import { Component, OnInit } from '@angular/core';
import {Creator} from '../models/creator';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})

export class HelpComponent implements OnInit {

  creators: Creator[] = this.initCreators();

  everyoneOnline: boolean = false;

  lastUpdate: string = '8. 28. 2021.';

  constructor() { }

  ngOnInit() {
  }

  private initCreators() {
    let list: Creator[] = [];
    list.push(new Creator('John Smith', 50, true));
    list.push(new Creator('Jane Wagner', 32, false));
    list.push(new Creator('Kobe Robinson', 28, true));

    return list;
  }

  toggleOnline() {
    this.everyoneOnline = !this.everyoneOnline;

    for (let creator of this.creators) {
      creator.online = this.everyoneOnline;
    }
  }
}

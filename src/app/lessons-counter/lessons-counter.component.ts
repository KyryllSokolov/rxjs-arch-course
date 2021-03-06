import { Component, OnInit } from '@angular/core';
import { ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE } from '../event-bus-experiment/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.scss']
})
export class LessonsCounterComponent implements OnInit {

  lessonsCounter = 0;

  constructor() {
    console.log('counter registered');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => this.lessonsCounter += 1
    });
  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {
    console.log('counter component recieved data ..');
    this.lessonsCounter = data.length;
  }

}

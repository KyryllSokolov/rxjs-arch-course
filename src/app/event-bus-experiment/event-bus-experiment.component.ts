import { Component, OnInit } from '@angular/core';
import { ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE } from './event-bus';
import { testLessons } from '../shared/model/test-lessons';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'event-bus-experiment',
  templateUrl: './event-bus-experiment.component.html',
  styleUrls: ['./event-bus-experiment.component.scss']
})
export class EventBusExperimentComponent implements OnInit {

  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    this.lessons = testLessons.slice(0);
    console.log('toplevel component broadcastet data');
    globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons);

    setTimeout(() => {
      this.lessons.push({
        id: Math.random(),
        description: 'New lesson comming'
      });

      globalEventBus.notifyObservers(LESSONS_LIST_AVAILABLE, this.lessons)
    }, 5600);


  }

  addLesson(lessonText: string) {
    globalEventBus.notifyObservers(ADD_NEW_LESSON, lessonText);
  }

}

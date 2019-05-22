import { Component, OnInit } from '@angular/core';
import { ADD_NEW_LESSON, globalEventBus, LESSONS_LIST_AVAILABLE, Observer } from '../event-bus-experiment/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent implements OnInit, Observer {
  lessons: Lesson[] = [];

  constructor() {
    console.log('list component registered');
    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_LESSON, {
      notify: lessonText => {
        this.lessons.push({
          id: Math.random(),
          description: lessonText
        });
      }
    });
  }

  ngOnInit() {}

  notify(data: Lesson[]) {
    console.log('lessons came');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    lesson.completed = !lesson.completed;
  }

}

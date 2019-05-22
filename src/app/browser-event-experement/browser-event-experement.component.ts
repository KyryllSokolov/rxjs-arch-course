import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experement',
  templateUrl: './browser-event-experement.component.html',
  styleUrls: ['./browser-event-experement.component.scss']
})
export class BrowserEventExperementComponent implements OnInit {

  hoverSection: HTMLElement;

  constructor() { }

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');

    this.hoverSection.addEventListener('mousemove', onMouseMove);
  }

  unsubscribe() {
    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }

}

function  onMouseMove(ev: MouseEvent) {
  console.log(ev);
}

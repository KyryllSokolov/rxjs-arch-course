import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventExperementComponent } from './browser-event-experement.component';

describe('BrowserEventExperementComponent', () => {
  let component: BrowserEventExperementComponent;
  let fixture: ComponentFixture<BrowserEventExperementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventExperementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventExperementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObserableCounterComponent } from './test-obserable-counter.component';

describe('TestObserableCounterComponent', () => {
  let component: TestObserableCounterComponent;
  let fixture: ComponentFixture<TestObserableCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObserableCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObserableCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

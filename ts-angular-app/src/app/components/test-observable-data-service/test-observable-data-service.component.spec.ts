import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestObservableDataServiceComponent } from './test-observable-data-service.component';

describe('TestObservableDataServiceComponent', () => {
  let component: TestObservableDataServiceComponent;
  let fixture: ComponentFixture<TestObservableDataServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestObservableDataServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestObservableDataServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

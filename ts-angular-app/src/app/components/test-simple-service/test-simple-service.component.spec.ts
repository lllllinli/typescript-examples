import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSimpleServiceComponent } from './test-simple-service.component';

describe('TestSimpleServiceComponent', () => {
  let component: TestSimpleServiceComponent;
  let fixture: ComponentFixture<TestSimpleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSimpleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSimpleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

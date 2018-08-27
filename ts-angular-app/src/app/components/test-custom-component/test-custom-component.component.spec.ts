import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomComponentComponent } from './test-custom-component.component';

describe('TestCustomComponentComponent', () => {
  let component: TestCustomComponentComponent;
  let fixture: ComponentFixture<TestCustomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCustomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCustomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentAndTemplateComponent } from './test-component-and-template.component';

describe('TestComponentAndTemplateComponent', () => {
  let component: TestComponentAndTemplateComponent;
  let fixture: ComponentFixture<TestComponentAndTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponentAndTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

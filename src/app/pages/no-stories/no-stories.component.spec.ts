import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoStoriesComponent } from './no-stories.component';

describe('NoStoriesComponent', () => {
  let component: NoStoriesComponent;
  let fixture: ComponentFixture<NoStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

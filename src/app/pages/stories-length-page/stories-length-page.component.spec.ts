import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesLengthPageComponent } from './stories-length-page.component';

describe('StoriesLengthPageComponent', () => {
  let component: StoriesLengthPageComponent;
  let fixture: ComponentFixture<StoriesLengthPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesLengthPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesLengthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

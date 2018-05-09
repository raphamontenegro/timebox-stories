import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { notFoundPageComponent } from './not-found-page.component';

describe('404PageComponent', () => {
  let component: notFoundPageComponent;
  let fixture: ComponentFixture<notFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ notFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(notFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

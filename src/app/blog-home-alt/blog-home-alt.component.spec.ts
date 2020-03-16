import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomeAltComponent } from './blog-home-alt.component';

describe('BlogHomeAltComponent', () => {
  let component: BlogHomeAltComponent;
  let fixture: ComponentFixture<BlogHomeAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogHomeAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomeAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

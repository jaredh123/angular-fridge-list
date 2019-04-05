import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngWebsiteNewComponent } from './ang-website-new.component';

describe('AngWebsiteNewComponent', () => {
  let component: AngWebsiteNewComponent;
  let fixture: ComponentFixture<AngWebsiteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngWebsiteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngWebsiteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

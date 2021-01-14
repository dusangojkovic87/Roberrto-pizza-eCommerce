import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImgFormComponent } from './gallery-img-form.component';

describe('GalleryImgFormComponent', () => {
  let component: GalleryImgFormComponent;
  let fixture: ComponentFixture<GalleryImgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImgFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

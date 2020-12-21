import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDescComponent } from './about-us-desc.component';

describe('AboutUsDescComponent', () => {
  let component: AboutUsDescComponent;
  let fixture: ComponentFixture<AboutUsDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsDescComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

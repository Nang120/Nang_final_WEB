import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePromotios } from './slide-promotios';

describe('SlidePromotios', () => {
  let component: SlidePromotios;
  let fixture: ComponentFixture<SlidePromotios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlidePromotios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidePromotios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

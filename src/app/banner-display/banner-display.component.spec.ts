import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BannerDisplayComponent } from './banner-display.component';

describe('BannerDisplayComponent', () => {
  let component: BannerDisplayComponent;
  let fixture: ComponentFixture<BannerDisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

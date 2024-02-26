import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundWrapperComponent } from './sound-wrapper.component';

describe('SoundWrapperComponent', () => {
  let component: SoundWrapperComponent;
  let fixture: ComponentFixture<SoundWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

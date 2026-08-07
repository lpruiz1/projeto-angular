import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaStyle } from './diretiva-style';

describe('DiretivaStyle', () => {
  let component: DiretivaStyle;
  let fixture: ComponentFixture<DiretivaStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

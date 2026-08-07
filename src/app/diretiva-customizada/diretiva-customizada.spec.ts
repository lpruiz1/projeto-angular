import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaCustomizada } from './diretiva-customizada';

describe('DiretivaCustomizada', () => {
  let component: DiretivaCustomizada;
  let fixture: ComponentFixture<DiretivaCustomizada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiretivaCustomizada]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiretivaCustomizada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlunos } from './crud-alunos';

describe('CrudAlunos', () => {
  let component: CrudAlunos;
  let fixture: ComponentFixture<CrudAlunos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudAlunos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudAlunos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

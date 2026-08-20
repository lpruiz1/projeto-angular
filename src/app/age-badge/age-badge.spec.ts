import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeBadge } from './age-badge';

describe('AgeBadge', () => {
  let component: AgeBadge;
  let fixture: ComponentFixture<AgeBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

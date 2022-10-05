import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FageNotFoundComponent } from './fage-not-found.component';

describe('FageNotFoundComponent', () => {
  let component: FageNotFoundComponent;
  let fixture: ComponentFixture<FageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FageNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationnComponent } from './paginationn.component';

describe('PaginationnComponent', () => {
  let component: PaginationnComponent;
  let fixture: ComponentFixture<PaginationnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCatComponent } from './single-cat.component';

describe('SingleCatComponent', () => {
  let component: SingleCatComponent;
  let fixture: ComponentFixture<SingleCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

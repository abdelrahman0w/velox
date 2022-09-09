import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCardsComponent } from './categories-cards.component';

describe('CategoriesCardsComponent', () => {
  let component: CategoriesCardsComponent;
  let fixture: ComponentFixture<CategoriesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrumbNavComponent } from './crumb-nav.component';

describe('CrumbNavComponent', () => {
  let component: CrumbNavComponent;
  let fixture: ComponentFixture<CrumbNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrumbNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrumbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

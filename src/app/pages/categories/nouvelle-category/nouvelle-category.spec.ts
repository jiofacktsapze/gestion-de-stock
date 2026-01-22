import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleCategory } from './nouvelle-category';

describe('NouvelleCategory', () => {
  let component: NouvelleCategory;
  let fixture: ComponentFixture<NouvelleCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouvelleCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleCategory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

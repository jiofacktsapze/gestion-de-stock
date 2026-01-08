import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonAction } from './bouton-action';

describe('BoutonAction', () => {
  let component: BoutonAction;
  let fixture: ComponentFixture<BoutonAction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonAction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonAction);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

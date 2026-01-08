import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCltFrs } from './details-clt-frs';

describe('DetailsCltFrs', () => {
  let component: DetailsCltFrs;
  let fixture: ComponentFixture<DetailsCltFrs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCltFrs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCltFrs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

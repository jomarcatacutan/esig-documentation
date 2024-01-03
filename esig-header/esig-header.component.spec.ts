import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsigHeaderComponent } from './esig-header.component';

describe('EsigHeaderComponent', () => {
  let component: EsigHeaderComponent;
  let fixture: ComponentFixture<EsigHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsigHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

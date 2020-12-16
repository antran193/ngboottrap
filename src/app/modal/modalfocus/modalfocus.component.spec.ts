import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfocusComponent } from './modalfocus.component';

describe('ModalfocusComponent', () => {
  let component: ModalfocusComponent;
  let fixture: ComponentFixture<ModalfocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalfocusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

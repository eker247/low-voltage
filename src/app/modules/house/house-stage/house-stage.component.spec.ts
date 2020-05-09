import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseStageComponent } from './house-stage.component';

describe('HouseStageComponent', () => {
  let component: HouseStageComponent;
  let fixture: ComponentFixture<HouseStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationStageComponent } from './station-stage.component';

describe('StationStageComponent', () => {
  let component: StationStageComponent;
  let fixture: ComponentFixture<StationStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

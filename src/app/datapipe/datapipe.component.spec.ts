import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapipeComponent } from './datapipe.component';

describe('DatapipeComponent', () => {
  let component: DatapipeComponent;
  let fixture: ComponentFixture<DatapipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatapipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

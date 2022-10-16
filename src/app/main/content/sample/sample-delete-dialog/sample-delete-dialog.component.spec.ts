import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDeleteDialogComponent } from './sample-delete-dialog.component';

describe('SampleDeleteDialogComponent', () => {
  let component: SampleDeleteDialogComponent;
  let fixture: ComponentFixture<SampleDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

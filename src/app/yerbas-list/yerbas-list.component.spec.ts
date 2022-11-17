import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YerbasListComponent } from './yerbas-list.component';

describe('YerbasListComponent', () => {
  let component: YerbasListComponent;
  let fixture: ComponentFixture<YerbasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YerbasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YerbasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

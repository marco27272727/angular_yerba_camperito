import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YerbasAboutComponent } from './yerbas-about.component';

describe('YerbasAboutComponent', () => {
  let component: YerbasAboutComponent;
  let fixture: ComponentFixture<YerbasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YerbasAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YerbasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRootComponent } from './first-root.component';

describe('FirstRootComponent', () => {
  let component: FirstRootComponent;
  let fixture: ComponentFixture<FirstRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstRootComponent]
    });
    fixture = TestBed.createComponent(FirstRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

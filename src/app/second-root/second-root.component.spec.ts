import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRootComponent } from './second-root.component';

describe('SecondRootComponent', () => {
  let component: SecondRootComponent;
  let fixture: ComponentFixture<SecondRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondRootComponent]
    });
    fixture = TestBed.createComponent(SecondRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLivreComponent } from './update-livre.component';

describe('UpdateLivreComponent', () => {
  let component: UpdateLivreComponent;
  let fixture: ComponentFixture<UpdateLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLivreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

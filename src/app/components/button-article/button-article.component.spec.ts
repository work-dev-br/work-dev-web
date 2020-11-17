import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArticleComponent } from './button-article.component';

describe('ButtonArticleComponent', () => {
  let component: ButtonArticleComponent;
  let fixture: ComponentFixture<ButtonArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

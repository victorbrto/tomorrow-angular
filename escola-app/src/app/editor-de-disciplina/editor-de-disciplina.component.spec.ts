import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeDisciplinaComponent } from './editor-de-disciplina.component';

describe('EditorDeDisciplinaComponent', () => {
  let component: EditorDeDisciplinaComponent;
  let fixture: ComponentFixture<EditorDeDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorDeDisciplinaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorDeDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

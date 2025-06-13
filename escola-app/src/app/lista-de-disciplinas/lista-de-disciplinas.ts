import { Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { Disciplina } from '../disciplina.model';

@Component({
  selector: 'app-lista-de-disciplinas',
  imports: [],
  templateUrl: './lista-de-disciplinas.html',
  styleUrl: './lista-de-disciplinas.css'
})

export class ListaDeDisciplinas {
  @Input()
  disciplinas = [new Disciplina(" ", " ")];

  @Input()
  editando = null;

  @Output()
  onEditar = new EventEmitter<Disciplina>();


}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinas, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selecionado = null;
  disciplinas = [
    new Disciplina('Língua Portuguesa', 'O objetivo é...'),
    new Disciplina('Educação Física', 'O objetivo é...')
  ]

  selecionar(disciplina: null) {
    this.selecionado = disciplina;
  }
}

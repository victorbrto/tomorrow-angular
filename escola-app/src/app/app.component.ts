import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaDeDisciplinas, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selecionado: Disciplina | null = null;
  nome: string = "";
  descricao: string = "";
  editando: Disciplina | null = null;

  disciplinas = [
    new Disciplina('Língua Portuguesa', 'O objetivo é...'),
    new Disciplina('Educação Física', 'O objetivo é...')
  ]


  selecionar(disciplina: Disciplina) {
    this.selecionado = disciplina;
  }

  salvar() {
    if (this.editando) {
      this.editando.nome = this.nome;
      this.editando.descricao = this.descricao;
    } else {
      const d = new Disciplina(this.nome, this.descricao);
      this.disciplinas.push(d);
    }
    this.nome = " ";
    this.descricao = " ";
    this.editando = null;
  }

  excluir(disciplina: Disciplina) {
    if (this.editando == disciplina) {
      alert("Você não pode excluir uma disciplina que está editando")
    } else {
      if (confirm("Tem certeza que deseja excluir a  disciplina " + disciplina.nome + "?")) {
        const i = this.disciplinas.indexOf(disciplina);
        this.disciplinas.splice(i, 1);
      }
    }
  }

  editar(disciplina: Disciplina) {
    this.nome = disciplina.nome;
    this.descricao = disciplina.descricao;
    this.editando = disciplina
  }

  cancelar() {
    this.nome = " ";
    this.descricao = " ";
    this.editando = null;
  }
}

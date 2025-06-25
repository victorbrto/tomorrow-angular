import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';
import { DisciplinasService } from './disciplinas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  selecionado: Disciplina | null = null;
  nome: string | null = "";
  descricao: string | null = "";
  editando: Disciplina | null = null
  disciplinas: Disciplina[] = []

  constructor(private disciplinasService: DisciplinasService) {
    this.atualizarLista()
  }

  atualizarLista() {
    this.disciplinasService.todas().subscribe(disciplinas => this.disciplinas)
  }


  selecionar(disciplina: Disciplina) {
    this.selecionado = disciplina;
  }

  salvar() {
    if (this.editando) {
      try {
        this.disciplinasService.salvar(this.editando?.id, this.nome as string).subscribe(disciplina => { this.atualizarLista() })
      }
      catch (e) {
        console.log(e)
      }
    } else {
      try {
        this.disciplinasService.salvar(null, this.nome as string)
      }
      catch (e) {
        console.log(e)
      }
    }
  }

  excluir(disciplina: Disciplina) {
    if (this.editando == disciplina) {
      alert('Você não pode excluir uma disciplina enquanto a edita.');
    } else {
      if (confirm('Tem certeza que deseja excluir a disciplina "' + disciplina.nome + '"?')) {
        try {
          { this.disciplinasService.excluir(disciplina.id) }
        }
        catch (e) {
          console.log(e)
        }
      }
    }
  }

  editar(disciplina: Disciplina) {
    this.nome = disciplina.nome;
    this.editando = disciplina;
  }

  cancelar() {
    this.disciplinasService.cancelar()
  }

}

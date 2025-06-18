import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { CommonModule } from '@angular/common';
import { Disciplina } from './disciplina.model';
import { FormsModule } from '@angular/forms';
import { DisciplinasService } from './disciplinas.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaDeDisciplinas, CommonModule, FormsModule, EditorDeDisciplinaComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
        const salveDisciplina = this.disciplinasService.salvar(this.editando?.id, this.editando?.nome, this.editando?.descricao)
        this.editando = new Disciplina(0, "", "");
      }
      catch (e) {
        console.log(e)
      }
    }

    /*  if (this.editando == disciplina) {
        alert("Você não pode excluir uma disciplina que está editando")
      } else {
        if (confirm("Tem certeza que deseja excluir a  disciplina " + disciplina.nome + "?")) {
          try {
            this.disciplinasService.excluir(disciplina)
          }
          catch (e) {
            console.log(e)
          }
        }
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
      this.editando = new Disciplina(0, "", "");
    }*/
  }

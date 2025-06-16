import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinasService {
  private disciplinas: Array<Disciplina> | null = null
  private id: number = 2

  constructor() {
    this.disciplinas = [new Disciplina(1, "Língua Portuguesa", "Essa matéria fala português")]
  }

  todas(): Array<Disciplina> | null {
    return this.disciplinas;
  }

  salvar(id: number, nome: string | null, descricao: string | null): Disciplina {
    if (id) {
      let editDisciplina = this.encontrar(id);
      if (editDisciplina) {
        editDisciplina.nome = nome;
        editDisciplina.descricao = descricao;
      } else {
        console.log("Disciplina não encontrada");
      }
      return editDisciplina;

    } else {
      const createDisciplina = new Disciplina(this.id, nome, descricao);
      this.disciplinas?.push(createDisciplina);
      this.id++;
      return createDisciplina;
    }
  }

  excluir(disciplina: number | Disciplina) {
    let isDisciplinaID = null
    if (typeof (disciplina) === "number") {
      isDisciplinaID = this.encontrar(disciplina)
    } else {
      isDisciplinaID = this.encontrar(disciplina.id)
    }
    if (isDisciplinaID) {
      const disciplinaID = this.disciplinas?.indexOf(isDisciplinaID)
      this.disciplinas?.slice(disciplinaID, 1)
    } else {
      console.log("Não foi possível encontrar a disciplina")
    }
  }

  encontrar(params: number | string) {
    let isDisciplinaID = null
    if (typeof (params) === "number") {
      isDisciplinaID = this.disciplinas?.filter(isDisciplinaID => isDisciplinaID.id === params)
    } else {
      isDisciplinaID = this.disciplinas?.filter(isDisciplinaID => isDisciplinaID.nome === params)
    } if (isDisciplinaID != null && isDisciplinaID.length > 0) {
      return isDisciplinaID[0]
    } else {
      return null;
    }
  }
}
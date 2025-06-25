import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DisciplinasService {
  private disciplinas: Disciplina[] = []
  API_URL = "http://localhost:3000";

  constructor(private http: HttpClient) {
  }

  todas(): Observable<Disciplina[]> {
    return this.http.get<Disciplina[]>(`${this.API_URL}/disciplinas`)
  }

  salvar(id: number | null, nome: string, descricao?: string): Observable<Disciplina> {

    if (id) {
      const disciplina = { id, nome, descricao }
      return this.http.patch<Disciplina>(`${this.API_URL}/disciplinas/${id}`, disciplina);
    } else {
      const disciplina = { nome, descricao }

      return this.http.post<Disciplina>(`${this.API_URL}/disciplinas`, disciplina);
    }
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/disciplinas/${id}`)
  }

  encontrar(params: number | string): Observable<Disciplina> {
    return this.http.get<Disciplina>(`${this.API_URL}/disciplinas/${params}`)
  }

  cancelar(): void {
    this.disciplinas = [];
  }

  private gerarProximoId() {
    if (this.disciplinas.length === 0) return 1;

    const maiorId = Math.max(...this.disciplinas.map(d => d.id))
    return maiorId + 1;
  }
}
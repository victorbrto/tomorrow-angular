import { Component, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Disciplina } from '../disciplina.model';
import { DisciplinasService } from '../disciplinas.service';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-de-disciplinas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './lista-de-disciplinas.html',
  styleUrl: './lista-de-disciplinas.css'
})

export class ListaDeDisciplinas implements OnInit {
  disciplinas: Disciplina[] = [];
  selecionado: Disciplina | null = null;
  filtro: string = '';

  get disciplinasFiltradas() {
    return this.disciplinas.filter(d =>
      d.nome.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  constructor(
    private disciplinasService: DisciplinasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista(): void {
    this.disciplinasService.todas().subscribe((data) => {
      this.disciplinas = data;
    });
  }

  excluir(disciplina: Disciplina): void {
    if (confirm(`Tem certeza que deseja excluir ${disciplina.nome}?`)) {
      this.disciplinasService.excluir(disciplina.id).subscribe(() => {
        this.atualizarLista();
      });
    }
  }

  editar(disciplina: Disciplina): void {
    this.router.navigate(['/disciplinas', disciplina.id]);
  }

  selecionar(disciplina: Disciplina): void {
    this.selecionado = disciplina;
  }

  cadastrar(): void {
    this.router.navigate(['/disciplinas', 'novo']);
  }


}
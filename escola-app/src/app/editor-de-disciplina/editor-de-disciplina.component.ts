import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { DisciplinasService } from '../disciplinas.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editor-de-disciplina',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './editor-de-disciplina.component.html',
  styleUrl: './editor-de-disciplina.component.css'
})
export class EditorDeDisciplinaComponent implements OnInit {
  nome: string = '';
  descricao: string = '';
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private disciplinasService: DisciplinasService
  ) {
  }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam && idParam !== 'novo') {
      this.id = +idParam;
      this.disciplinasService.encontrar(this.id).subscribe((disciplina) => {
        this.nome = disciplina.nome;
        this.descricao = disciplina.descricao ?? '';
      });
    }
  }

  salvar() {
    this.disciplinasService
      .salvar(this.id, this.nome, this.descricao)
      .subscribe(() => {
        this.router.navigate(['/disciplinas']);
      });
  }

  cancelar() {
    this.router.navigate(['/disciplinas']);
  }
}

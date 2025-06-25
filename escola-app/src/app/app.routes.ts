import { Routes } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { HomeComponent } from './home/home.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'disciplinas',
        component: ListaDeDisciplinas,
    },

    {
        path: 'disciplinas/:id',
        component: EditorDeDisciplinaComponent,
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
    },
];

import { Routes } from '@angular/router';
import { ListaDeDisciplinas } from './lista-de-disciplinas/lista-de-disciplinas';
import { EditorDeDisciplinaComponent } from './editor-de-disciplina/editor-de-disciplina.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'discipliinas',
        component: ListaDeDisciplinas,
    },

    {
        path: 'disciplinas/:id',
        component: EditorDeDisciplinaComponent,
    },
];

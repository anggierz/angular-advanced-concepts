import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'table',
        loadComponent: () => import('./components/table/table.component').then(m => m.TableComponent)
    },
    {
        path: 'form',
        loadComponent: () => import('./components/form/form.component').then(m => m.FormComponent)
    }
];

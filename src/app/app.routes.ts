import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'table',
        loadComponent: () => import('./components/table/table.component').then(m => m.TableComponent)
    }
];

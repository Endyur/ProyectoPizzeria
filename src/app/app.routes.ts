import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { GestionpizzasComponent } from '@components/gestionpizzas/gestionpizzas/gestionpizzas.component';

export const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },   
    { path: 'home', loadChildren: () => import('./components/home/home.routes') },
    { path: 'inventario',loadChildren: () => import('./components/gestionpizzas/gestionpizza.routes') },
    { path: '**', redirectTo: '/home' }
];


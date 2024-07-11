import { Routes } from "@angular/router";

const GestionPizza: Routes = [
    {
        path: '',
        loadComponent: () => import('./gestionpizzas/gestionpizzas.component').then(m => m.GestionpizzasComponent),
    }
];
export default GestionPizza;
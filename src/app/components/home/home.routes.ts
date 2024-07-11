import { Routes } from "@angular/router";
const HomePizza: Routes = [
    {
        path: '',
        loadComponent: () => import('./home.component').then(m => m.HomeComponent),
    }
];
export default HomePizza;
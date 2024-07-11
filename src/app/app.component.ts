import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from "@components/toolbar/toolbar.component";
import {PhotocarruselComponent} from "@components/carrusel/photocarrusel/photocarrusel.component";
import{CardsPizzaComponent} from "@components/cardspizzas/cards-pizza/cards-pizza.component";
import { HomeComponent } from "./components/home/home.component";
import { GestionpizzasComponent } from "./components/gestionpizzas/gestionpizzas/gestionpizzas.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, PhotocarruselComponent, CardsPizzaComponent, HomeComponent, GestionpizzasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PizeriaFront';
}

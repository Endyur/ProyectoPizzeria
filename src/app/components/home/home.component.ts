import { Component } from '@angular/core';
import { PhotocarruselComponent } from "../carrusel/photocarrusel/photocarrusel.component";
import { CardsPizzaComponent } from "../cardspizzas/cards-pizza/cards-pizza.component";



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PhotocarruselComponent, CardsPizzaComponent],
  template: `
   <app-photocarrusel></app-photocarrusel>
   <app-cards-pizza></app-cards-pizza>
  `,
  styles: ``
})
export class HomeComponent {

}

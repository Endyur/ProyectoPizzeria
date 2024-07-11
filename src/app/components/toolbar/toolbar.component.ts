import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
 <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" [routerLink]="'/home'" routerLinkActive="router-link-active">
      <img src="pizza.svg"  width="34" height="35" class="d-inline-block align-text-top">
      Pizzeria
    </a>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page"[routerLink]="'/home'" routerLinkActive="router-link-active">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-current="page" [routerLink]="'/inventario'" routerLinkActive="router-link-active">Inventario</a>
        </li>

      </ul>
    
    </div>
  </div>
</nav>



  `,
  styles:[ `
  a {color: yellow;}

 





  `]
})
export class ToolbarComponent {

}

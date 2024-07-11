import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasSerService } from 'src/app/services/pizzas-ser.service';
import { Pizzas } from 'src/app/interfaces/pizzas.interface';

interface PizzaData {
  id: string;
  pizza: string;
  cantidad: number;
  field: string;
}

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  data: PizzaData[] = [];
  rawData: Pizzas[] = [];

  constructor(private _pizzaService: PizzasSerService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._pizzaService.getPizzas().subscribe({
      next: (response: Pizzas[]) => {
        console.log('Datos recibidos:', response); // Verificar los datos recibidos
        this.rawData = response;
        this.formatData(response);
      },
      error: (error) => {
        console.error('Error fetching data', error);
      }
    });
  }

  formatData(data: Pizzas[]): void {
    this.data = [];
    data.forEach(item => {
      if (item.Pizza && item.Cantidad !== undefined) {
        this.data.push({ id: item.id, pizza: item.Pizza, cantidad: item.Cantidad, field: 'Cantidad' });
      }
      if (item.Pizzah && item.CantidadH !== undefined) {
        this.data.push({ id: item.id, pizza: item.Pizzah, cantidad: item.CantidadH, field: 'CantidadH' });
      }
      if (item.PizzaC && item.CantidadC !== undefined) {
        this.data.push({ id: item.id, pizza: item.PizzaC, cantidad: item.CantidadC, field: 'CantidadC' });
      }
      if (item.PizzaN && item.CantidadN !== undefined) {
        this.data.push({ id: item.id, pizza: item.PizzaN, cantidad: item.CantidadN, field: 'CantidadN' });
      }
      if (item.PizzaS && item.CantidadS !== undefined) {
        this.data.push({ id: item.id, pizza: item.PizzaS, cantidad: item.CantidadS, field: 'CantidadS' });
      }
      if (item.PizzaT && item.CantidadT !== undefined) {
        this.data.push({ id: item.id, pizza: item.PizzaT, cantidad: item.CantidadT, field: 'CantidadT' });
      }
    });
  }

  increaseQuantity(item: PizzaData) {
    item.cantidad++;
  }

  decreaseQuantity(item: PizzaData) {
    if (item.cantidad > 0) {
      item.cantidad--;
    }
  }

  saveChanges() {
    const updatedData: Pizzas[] = this.rawData.map(original => {
      const updates = this.data.filter(d => d.id === original.id);
      updates.forEach(update => {
        original[update.field] = update.cantidad;
      });
      return original;
    });
    
    console.log('Datos a actualizar:', updatedData); // Verificar datos
    this._pizzaService.updatePizzasBatch(updatedData)
      .then(() => {
        console.log('Datos guardados');
        this.loadData(); // Recargar los datos después de guardar
      })
      .catch((error) => {
        console.error('Error guardando datos', error);
      });
  }
}

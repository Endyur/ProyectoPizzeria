import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, writeBatch } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Pizzas } from '../interfaces/pizzas.interface';

const Path = 'pedidospizzas';

@Injectable({
  providedIn: 'root'
})
export class PizzasSerService {
  constructor(private firestore: Firestore) {}

  getPizzas(): Observable<Pizzas[]> {
    const pizzaCollection = collection(this.firestore, Path);
    return collectionData(pizzaCollection, { idField: 'id' }) as Observable<Pizzas[]>;
  }

  updatePizzasBatch(data: Pizzas[]): Promise<void> {
    const batch = writeBatch(this.firestore);
    data.forEach(item => {
      const pizzaDocRef = doc(this.firestore, `${Path}/${item.id}`);
      batch.update(pizzaDocRef, { 
        Cantidad: item.Cantidad,
        CantidadH: item.CantidadH,
        CantidadC: item.CantidadC,
        CantidadN: item.CantidadN,
        CantidadS: item.CantidadS,
        CantidadT: item.CantidadT
      });
    });
    return batch.commit();
  }
}

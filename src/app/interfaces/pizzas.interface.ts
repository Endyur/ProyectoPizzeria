export interface Pizzas {
    id: string; 
    Pizzah?: string;
    CantidadH?: number;
    Pizza?: string;
    Cantidad?: number;
    PizzaC?: string;
    CantidadC?: number;
    PizzaN?: string;
    CantidadN?: number;
    PizzaS?: string;
    CantidadS?: number;
    PizzaT?: string;
    CantidadT?: number;
    [key: string]: string | number | undefined; // Firma de índice para manejar acceso dinámico
  }
  
  interface PizzaData {
    id: string;
    pizza: string;
    cantidad: number;
    field: string;
  }
  
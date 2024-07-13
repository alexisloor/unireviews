import { Injectable } from '@angular/core';
import { Vendedor } from '../classes/vendedor';

@Injectable({
  providedIn: 'root'
})
export class InfosellersService {

  constructor() { }

  private vendedores: Vendedor[] = [
    { id: 1, plataforma: 'Amazon', usuario: "ALx Hardware", calificacion: "5", producto: "laptop lenovo ideapad", logo: "/assets/alxhardware.jfif"},
    { id: 2, plataforma: 'Amazon', usuario: "EM PC's", calificacion: "5", producto: "laptop lenovo ideapad", logo: "/assets/EMpcs.jfif"},
    { id: 3, plataforma: 'Facebook Marketplace', usuario: "MEL Sports", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/MEL sport.jfif"},
    { id: 4, plataforma: 'Facebook Marketplace', usuario: "GEO Electronics", calificacion: "5", producto: "laptop lenovo ideapad", logo: "assets/GEO e.jfif"},
    { id: 5, plataforma: 'Mercado Libre', usuario: "Liz Sporting Club", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/liz sc.jfif"},
    { id: 6, plataforma: 'Mercado Libre', usuario: "LEO 10", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/leo 10.jfif"},
    // Añade más vendedores según sea necesario

  ];

  buscarVendedores(producto: string): Vendedor[] {
    return this.vendedores.filter(vendedor => 
      vendedor.producto.includes(producto)
    );
  }

}

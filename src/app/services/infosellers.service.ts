import { Injectable } from '@angular/core';
import { Vendedor } from '../classes/vendedor';

@Injectable({
  providedIn: 'root'
})
export class InfosellersService {


  constructor() { }

  private vendedores: Vendedor[] = [
    { id: 1, plataforma: 'Amazon', usuario: "ALx Hardware", calificacion: "5", producto: "laptop lenovo ideapad", logo: "/assets/alxhardware.jfif", opiniones: {"npc": "Excelentes productos, muy recomendado!!!!"}},
    { id: 2, plataforma: 'Amazon', usuario: "EM PC's", calificacion: "5", producto: "laptop lenovo ideapad", logo: "/assets/EMpcs.jfif", opiniones: {"Homer_simpson": "Buena atención al cliente."}},
    { id: 3, plataforma: 'Facebook Marketplace', usuario: "MEL Sports", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/MEL sport.jfif", opiniones: {"Moe": "Producto tal como se describe."}},
    { id: 4, plataforma: 'Facebook Marketplace', usuario: "GEO Electronics", calificacion: "5", producto: "laptop lenovo ideapad", logo: "assets/GEO e.jfif", opiniones: {"carl_johnson": "Entrega rápida y segura."}},
    { id: 5, plataforma: 'Mercado Libre', usuario: "Liz Sporting Club", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/liz sc.jfif", opiniones: {"arnold": "Muy buena calidad."} },
    { id: 6, plataforma: 'Mercado Libre', usuario: "LEO 10", calificacion: "5", producto: "fc barcelona jersey player version", logo: "/assets/leo 10.jfif", opiniones: {"gerald": "Vendedor muy confiable."}},
    { id: 7, plataforma: 'Amazon', usuario: "Mac estor 100% real", calificacion: "1", producto: "iphone 30", logo: "/assets/MEL sport.jfif", opiniones: {"eric_cartman": "estafador, te voy a incendiar la casa.", "kyleB": "No compren, me vendió un iphone 30 y dice Android cuando enciende.", "butterSS": "Tu celular me explotó en las manos."}},
    // Añade más vendedores según sea necesario

  ];

  buscarVendedores(producto: string): Vendedor[] {
    return this.vendedores.filter(vendedor => 
      vendedor.producto.includes(producto)
    );
  }

  buscarRealVendedores(seller: string): Vendedor[] {
    return this.vendedores.filter(vendedor => 
      vendedor.usuario.includes(seller)
    );
  }

}

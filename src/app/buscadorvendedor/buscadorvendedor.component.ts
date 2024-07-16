import { Component } from '@angular/core';
import { InfosellersService } from '../services/infosellers.service';
import { Vendedor } from '../classes/vendedor';

@Component({
  selector: 'app-buscadorvendedor',
  templateUrl: './buscadorvendedor.component.html',
  styleUrls: ['./buscadorvendedor.component.css']
})
export class BuscadorvendedorComponent {

  searchQuery: string = '';
  vendedores: Vendedor[] = [];
  error: string = '';

  constructor(private infoSellers: InfosellersService) { }

  searchVendedor(): void {
    try {
      this.vendedores = this.infoSellers.buscarRealVendedores(this.searchQuery);
      if (this.vendedores.length === 0) {
        this.error = 'No se encontraron vendedores para el producto buscado.';
      } else {
        this.error = '';
      }
    } catch (e) {
      this.error = 'Error al buscar vendedores';
    }
  }

  getOpinionKeys(vendedor: Vendedor): string[] {
    return Object.keys(vendedor.opiniones);
  }

}


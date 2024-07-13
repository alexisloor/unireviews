import { Component } from '@angular/core';
import { Vendedor } from '../classes/vendedor';
import { InfosellersService } from '../services/infosellers.service';

@Component({
  selector: 'app-buscadorproducto',
  templateUrl: './buscadorproducto.component.html',
  styleUrls: ['./buscadorproducto.component.css']
})
export class BuscadorproductoComponent {

  query: string = '';
  resultados: Vendedor[] = [];

  constructor(private infoSellers: InfosellersService) {}

  buscar() {
    this.resultados = this.infoSellers.buscarVendedores(this.query);
  }

}

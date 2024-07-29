import { Component } from '@angular/core';


interface Resena {
  opinion: string;
}

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent {

  resenas: Resena[] = [];
  nuevaResena: Resena = { opinion: '' };
  imagenPreview: string | ArrayBuffer | null = null;

  agregarResena() {
    if (this.nuevaResena.opinion.trim()) {
      const resenaConImagen = { ...this.nuevaResena};
      this.resenas.push(resenaConImagen);
      this.limpiarFormulario();
    }
  }

  limpiarFormulario() {
    this.nuevaResena = {opinion: '' };
    this.imagenPreview = null;
  }



}

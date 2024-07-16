import { Component } from '@angular/core';

interface Resena {
  usuario: string;
  producto: string;
  opinion: string;
  imagen?: string;
}

@Component({
  selector: 'app-resenas',
  templateUrl: './resenas.component.html',
  styleUrls: ['./resenas.component.css']
})
export class ResenasComponent {

  resenas: Resena[] = [];
  nuevaResena: Resena = { usuario: '', producto: '', opinion: '' };
  imagenPreview: string | ArrayBuffer | null = null;

  agregarResena() {
    if (this.nuevaResena.opinion.trim()) {
      const resenaConImagen = { ...this.nuevaResena, imagen: this.imagenPreview as string };
      this.resenas.push(resenaConImagen);
      this.limpiarFormulario();
    }
  }

  cargarImagen(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPreview = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  limpiarFormulario() {
    this.nuevaResena = { usuario: '', producto: '', opinion: '' };
    this.imagenPreview = null;
  }



}

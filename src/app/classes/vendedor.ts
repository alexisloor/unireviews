export class Vendedor {
    id: number;
    plataforma: string;
    usuario: string;
    calificacion: string;
    producto: string;
    logo: string;
    opiniones: { [usuario_plataforma: string]: string };
    constructor() {
        this.id = 0;
        this.plataforma = '';
        this.usuario = '';
        this.calificacion = '';
        this.producto = '';
        this.logo = '';
        this.opiniones = {};
    }
}

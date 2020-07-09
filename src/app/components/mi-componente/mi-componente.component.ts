import { Component } from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public anio: number;

    constructor(){
        this.titulo = "Hola mundo de Angular";
        this.comentario = "Soy un nuevo compoenente creado por gleon@ups.edu.ec";
        this.anio = 2020;

        console.log('Hola, fui creado');
        console.log(this.titulo, this.comentario, this.anio);
    }
}
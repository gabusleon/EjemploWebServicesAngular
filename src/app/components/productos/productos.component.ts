import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  idBodega:string;
  idCategoria:string;

  constructor(private route: ActivatedRoute) {

    this.idBodega = route.snapshot.params.idBodega;
    this.idCategoria = route.snapshot.params.idCategoria;

   }

  ngOnInit(): void {
  }

}

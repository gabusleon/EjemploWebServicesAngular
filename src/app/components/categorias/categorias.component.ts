import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public idBodega:string;

  categorias = [
    {
      id: "123",
      name: "Categoria 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "456",
      name: "Categoria 2",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "789",
      name: "Categoria 3",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ];

  constructor(private route: ActivatedRoute) {
    this.idBodega = route.snapshot.params.idBodega;
    console.log(this.idBodega);

   }

  ngOnInit(): void {
  }

}

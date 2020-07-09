import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})
export class BodegasComponent implements OnInit {

  bodegas = [
    {
      id: "ABC8441189035",
      name: "Bodega del Sur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      id: "DEF6510463347",
      name: "Bodega del norte",
      description: "Proin ac metus in diam porttitor viverra eu sit amet ligula."
    },
    {
      id: "GHI0831819467",
      name: "Bodega del centro",
      description: "Duis sodales dui vitae urna varius, at ullamcorper purus tempor."
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

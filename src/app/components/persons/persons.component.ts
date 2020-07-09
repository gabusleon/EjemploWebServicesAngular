import { Component, OnInit } from '@angular/core';
import { WsJeeService } from '../../services/ws-jee.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  public clients: any = [];

  constructor(private clientsService: WsJeeService) { }

  ngOnInit() {

    this.clientsService.getClients()
      .subscribe( (response: any) => { // Success      
        this.clients = response;
        console.log(response);
      }, (error) => {
        console.error(error);
      }
    );
  }

}

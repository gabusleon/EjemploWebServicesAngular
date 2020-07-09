import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponente } from './components/mi-componente/mi-componente.component';
import { PersonsComponent } from './components/persons/persons.component';
import { HttpClientModule } from '@angular/common/http';
import { WsJeeService } from './services/ws-jee.service';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponente,
    PersonsComponent,
    BodegasComponent,
    CategoriasComponent,
    ProductosComponent,
    HomeComponent,
    PageNotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WsJeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

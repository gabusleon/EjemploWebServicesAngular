import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BodegasComponent } from './components/bodegas/bodegas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductosComponent } from './components/productos/productos.component';
import { PageNotFound404Component } from './components/page-not-found404/page-not-found404.component';



const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'bodegas', component: BodegasComponent},
  { path: 'categorias/:idBodega', component: CategoriasComponent},
  { path: 'productos/:idBodega/:idCategoria', component: ProductosComponent},
  { path: '**', component: PageNotFound404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

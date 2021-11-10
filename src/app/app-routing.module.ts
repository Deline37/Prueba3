import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaginaActualizarComponent} from './componentes/pagina-actualizar/pagina-actualizar.component';
import {PaginaPrincipalComponent} from './componentes/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path:"", component:PaginaPrincipalComponent},
  {path:"actualizarClima", component:PaginaActualizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

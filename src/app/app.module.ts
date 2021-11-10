import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { PaginaActualizarComponent } from './componentes/pagina-actualizar/pagina-actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

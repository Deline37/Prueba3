import { Component, OnInit } from '@angular/core';
import {regiones} from '../../interfaces/region';
import {climas} from '../../interfaces/clima'

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss']
})

export class PaginaPrincipalComponent implements OnInit {

  listaRegiones = regiones;
  listaClima = climas;

  activeId = "Valparaiso";
  
  Region = regiones.find(region => region.nombre == this.activeId)

  constructor() { }

  ngOnInit(): void {
  }

  RegionBuscada (){

    console.log(this.activeId)
    this.Region = regiones.find(region => region.nombre == this.activeId)
  
  }

}

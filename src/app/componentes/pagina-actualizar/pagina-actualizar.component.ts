import { Component, OnInit } from '@angular/core';
import {regiones} from '../../interfaces/region';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-pagina-actualizar',
  templateUrl: './pagina-actualizar.component.html',
  styleUrls: ['./pagina-actualizar.component.scss']
})
export class PaginaActualizarComponent implements OnInit {

  listaRegiones = regiones;

  Formulario:FormGroup;

  constructor(public form:FormBuilder) {

    this.Formulario = form.group({
      "Region": ["1", Validators.required],
      "Clima": ["Soleado", Validators.required],
      "Dia": ["", Validators.required],
      "Temperatura":["",Validators.required],
      "Grados":["Celcius", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  Validar (){
    console.log(this.Formulario.value);

    let region = regiones.find(region => region.nombre == this.Formulario.value[0]);

    console.log(region);
  }

}

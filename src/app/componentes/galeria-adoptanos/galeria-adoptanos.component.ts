import { Component, OnInit } from '@angular/core';
import {GaleriaComponentService} from "../../servicios/galeria-component.service";
import {NgForm} from "@angular/forms";
import {Mascota} from "../../dominio/mascota";


@Component({
  selector: 'app-galeria-adoptanos',
  templateUrl: './galeria-adoptanos.component.html',
  styleUrls: ['./galeria-adoptanos.component.css']
})
export class GaleriaAdoptanosComponent implements OnInit {

  mascotas: Array<{
    image:String,
    nombre: String,
    especie: String,
    tamanio: String,
    edad: String
  }>;

  mascota: Mascota = new Mascota;

  search: string = '';
  tamanio: string = '';

  constructor( private servicio:GaleriaComponentService) { }

  ngOnInit(): void {
    this.mascotas= this.servicio.getAll();
  }

  ngAfterViewInit() : void{
    let tabElements = document.getElementsByClassName("card");
    console.log(tabElements)
  }

//PRUEBA FILTRO ESPECIE
  aplicarFiltro(value){
    this.mascotas= this.servicio.getAll()

    if (this.search == value){
      this.search="";
    }else if (value != ""){
      this.search = value;
      const result = this.mascotas.filter(mascota => mascota.especie.toLowerCase() === value);
      this.mascotas= result;
      console.log(result)
    }
  }

  aplicarFiltroTamanio(value){
    this.mascotas= this.servicio.getAll()

    if (this.search == value){
      this.search="";
    }else if (value != ""){
      this.search = value;
      const result = this.mascotas.filter(mascota => mascota.tamanio.toLowerCase() === value);
      this.mascotas= result;
      console.log(result)
    }
  }


  //FORM DE PRUEBA
  enviarForm(form: NgForm){
    this.agregarMascota()
    form.form.reset()
  }

  agregarMascota(){
    // 2 TENDRIA QUE ENVIAR INFO AL SERVICIO
    //ESPERAR RESPUESTA
    //SI ES UNA RESPUESTA EXITOSA PUEDO EJECUTAL this.perros= this.servicio.getAll();
    //EN CASO CONTRARIO MUESTRO MENSAJE DE REINTENTO
    this.servicio.addMascotas(this.mascota);
  }

}

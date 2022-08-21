import { Injectable } from '@angular/core';
import {Mascota} from "../dominio/mascota";

@Injectable({
  providedIn: 'root'
})
export class GaleriaComponentService {

  mascotas: Array<{ image: String, nombre: String, especie: String, tamanio: String, edad: String, sexo:String}> = [
    {image:'../../../assets/img/adoptar1.jpg' ,nombre: 'Jack',especie:'Perro', tamanio: 'Chico', edad: '3 años',sexo:'macho'},
    {image:'../../../assets/img/adoptar9.jpg', nombre: 'Mocca', especie:'Perro', tamanio: 'Grande', edad: '1 año',sexo:'hembra'},
    {image: '../../../assets/img/adoptar7.png', nombre: 'Noa',especie:'Gato' , tamanio: 'Grande', edad: '8meses',sexo:'hembra'},
    {image:'../../../assets/img/adoptar3.webp' ,nombre: 'Perla',especie:'Perro', tamanio: 'Mediano', edad: '4 meses',sexo:'hembra'},
    {image:'../../../assets/img/adoptar6.jfif', nombre: 'Pablo', especie:'Gato', tamanio: 'Mediano', edad: '1 año',sexo:'macho'},
    {image: '../../../assets/img/adoptar4.webp', nombre: 'Chispa',especie:'Perro' , tamanio: 'Mediano', edad: '5 meses', sexo:'hembra'}
  ];

    //imagen
    //https://images.dog.ceo/breeds/eskimo/n02109961_2555.jpg

  constructor() { }

  getAll(){
    //3 TENGO QUE HACER PETICION AL SERVICIO PARA OBTENER EL LISTADO
    //ASIGNAR LA RESPUESTA A LA VARIABLE PERROS
    //SI NO ES EXITOSO DEBERIA MOSTRAR ARRAY VACIO PARA QUE NO RENDERICE NADA
    //
    return this.mascotas;
  }

  addMascotas(mascota: Mascota){
    // 1RECIBIR EL OBJETO PERRO
    //ENVIAR EL OBJETO A UN SERVICIO DE API(GUARDAR PERRO)
    //RETORNAR EL STATUS DE PETICION
    this.mascotas.push({image:mascota.image, nombre:mascota.nombre, especie: mascota.especie, edad:mascota.edad,tamanio:mascota.tamanio, sexo: mascota.sexo });
    console.log(mascota)
  }


}




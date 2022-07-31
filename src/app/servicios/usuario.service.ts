import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../dominio/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

//obtengo el listado de usuarios desde el backend
  private baseURL = "http://localhost:8080/proyectoAdoptame/usuarios";

  constructor(private httpClient : HttpClient) { }

  //con este metodo traigo mis usuarios
  getListaUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`)
  }

  //este metodo sirve para registrar el usuario
  registrarUsuario(usuario:Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, usuario)
  }

  getById(id:number):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}/${id}`);
  }

  modificarUsuario(id:number, usuario:Usuario): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
  }

  //con este metodo puedo eliminar un usuario de mi lista
  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}




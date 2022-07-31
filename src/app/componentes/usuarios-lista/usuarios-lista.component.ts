import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../dominio/usuario";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario [];

  constructor(private usuarioServicio: UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.getUsuarios()
  }

  modificarUsuario(id:number){
    this.router.navigate(['modificar-usuario',id]);

  }

  eliminarUsuario(id:number){
    this.usuarioServicio.eliminarUsuario(id).subscribe(dato => {
      console.log(dato);
      this.getUsuarios()
    });
  }

  private getUsuarios(){
    this.usuarioServicio.getListaUsuarios().subscribe(dato=>{
      this.usuarios = dato;
    });

  }

}

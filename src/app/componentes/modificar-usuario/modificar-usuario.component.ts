import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";
import {Usuario} from "../../dominio/usuario";

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  usuario:Usuario= new Usuario();

  constructor(private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato =>{
      console.log(dato);
      this.chequearListaUsuario();
    },error => console.log(error));
  }

  chequearListaUsuario(){
    this.router.navigate(['/lista'])
  }

  enviarForm(form: NgForm){
    this.guardarUsuario()
    console.log(this.usuario)

    form.form.reset()
  }

}

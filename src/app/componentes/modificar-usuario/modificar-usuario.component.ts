import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Usuario} from "../../dominio/usuario";


@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  id: string;
  usuario:Usuario= new Usuario();

  constructor(private usuarioServicio:UsuarioService, private router:Router, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.usuarioServicio.getById(this.id).subscribe( dato =>{
      this.usuario=dato;
    },error => console.log(error));
  }

  guardarUsuario(){
    this.usuarioServicio.modificarUsuarios(this.id, this.usuario).subscribe(dato =>{
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

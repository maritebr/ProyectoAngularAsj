import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {Registro} from "../../dominio/registro";
import {Usuario} from "../../dominio/usuario";
import {UsuarioService} from "../../servicios/usuario.service";
import {Router} from "@angular/router";
import {validarEspacios} from "../../validaciones/espacios.validators";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  usuario:Usuario= new Usuario();
  registro: Registro= new Registro();

  formGroup:FormGroup;
  minimoCar: number = 2;
  soloLetras: string= '[a-zA-Z ]{2,254}';
  mailValido: string='[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'

  constructor(private formBuilder: FormBuilder, private usuarioServicio:UsuarioService, private router:Router) {

    //VALIDACIONES REACTIVO
    this.formGroup= formBuilder.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minimoCar),
        Validators.pattern(this.soloLetras),
        validarEspacios
      ])],
      apellido: ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minimoCar),
        Validators.pattern(this.soloLetras),
        validarEspacios
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.mailValido)
      ])]
    })
  }

  ngOnInit(){
  }

  //FORMULARIO TEMPLATE

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

  //FORMULARIO REACTIVO

  enviarFormModal(){

    this.registro.nombre= this.formGroup.value.nombre;
    this.registro.apellido= this.formGroup.value.apellido;
    this.registro.email= this.formGroup.value.email;
    console.log("Nombre: " + this.registro.nombre);
    console.log("Apellido: " + this.registro.apellido);
    console.log("Email: " + this.registro.email);
    console.log(this.formGroup)
    this.formGroup.reset();

  }

}

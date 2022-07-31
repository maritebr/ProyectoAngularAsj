import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { AportesComponent } from './componentes/aportes/aportes.component';
import { AdopcionesComponent } from './componentes/adopciones/adopciones.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import {NgImageSliderModule} from "ng-image-slider";
import { GaleriaAdoptanosComponent } from './componentes/galeria-adoptanos/galeria-adoptanos.component';
import {RouterModule, Routes} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { UsuariosListaComponent } from './componentes/usuarios-lista/usuarios-lista.component';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario.component';
import { ModificarUsuarioComponent } from './componentes/modificar-usuario/modificar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarruselComponent,
    NosotrosComponent,
    AportesComponent,
    AdopcionesComponent,
    FormularioComponent,
    GaleriaAdoptanosComponent,
    UsuariosListaComponent,
    RegistroUsuarioComponent,
    ModificarUsuarioComponent
  ],
    imports: [
        BrowserModule,
        FontAwesomeModule,
        NgImageSliderModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

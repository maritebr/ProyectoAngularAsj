import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarruselComponent} from "./componentes/carrusel/carrusel.component";
import {NosotrosComponent} from "./componentes/nosotros/nosotros.component";
import {AportesComponent} from "./componentes/aportes/aportes.component";
import {AdopcionesComponent} from "./componentes/adopciones/adopciones.component";
import {GaleriaAdoptanosComponent} from "./componentes/galeria-adoptanos/galeria-adoptanos.component";
import {FormularioComponent} from "./componentes/formulario/formulario.component";
import {UsuariosListaComponent} from "./componentes/usuarios-lista/usuarios-lista.component";
import {ModificarUsuarioComponent} from "./componentes/modificar-usuario/modificar-usuario.component";

const routes: Routes = [
  {path: 'inicio', component: CarruselComponent},
  {path: 'nosotros',component: NosotrosComponent},
  {path: 'aportes', component:AportesComponent},
  {path: 'adopciones', component:AdopcionesComponent},
  {path: 'adoptanos', component:GaleriaAdoptanosComponent},
  {path: 'contactanos', component:FormularioComponent},
  {path: 'lista', component:UsuariosListaComponent},
  {path: 'modificar-usuario/:id', component:ModificarUsuarioComponent},
  {path:'', pathMatch:'full',redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

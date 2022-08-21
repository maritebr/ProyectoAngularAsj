export class Usuario {
  id:number;
  nombre: string;
  apellido: string;
  email: string;
  comentarios: string;

}

export class ServiceUsuario{
  datos : Usuario[];
  estado : boolean;
}

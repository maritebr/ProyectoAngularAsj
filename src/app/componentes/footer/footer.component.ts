import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  urlTwitter: string= "https://twitter.com/";
  urlInstagram: string= "https://www.instagram.com/";
  urlFacebook: string= "https://www.facebook.com/";
  urlMail: string= "mailto: proyectoadoptame@gmail.com";

  direccion : string= "Visitános en Av.Mascotas 2800, CABA. Tambien puedes comunicarte por nuestros teléfonos de contacto : 11545454548 ó 11454545458"

  constructor() { }

  ngOnInit(): void {
  }

}

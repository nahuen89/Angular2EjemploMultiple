import { Component } from '@angular/core';

@Component({
  selector: 'varios', //define como se llama el componente en la vista
  templateUrl: './varios.component.html',//como se llama el template donde se usa el componente
  styleUrls: ['./varios.component.css'], //estilo de la app
})

export class VariosComponent {

  appTitle ='titulo del head';
  title = 'Funca!';
  name = 'Nadie';
  gender: string;
  javascript = false;
  angular = false;

  /* todas las imagenes van en assets esto esta configurado en el webpach
   del angular-cli y por ahora no se puede cambiar*/
  imgUrl = "assets/2mkGrande.png";


  setName(name:string){
    this.name = name;
  }
app
  items = [
    { value: 'Lunes', selected: false },
    { value: 'Martes', selected: false },
    { value: 'Miercoles', selected: false },
    { value: 'Jueves', selected: false },
    { value: 'Viernes', selected: false }
  ]
  city: string;

  change() {
      this.name = "Nobody";
      this.angular = !this.angular;
      this.javascript = !this.javascript;
      this.gender = this.gender == 'Hombre' ? 'Mujer' : 'Hombre';
      for (let key in this.items) {
          this.items[key].selected = !
          this.items[key].selected;
      }
  }

  update(city: string) {
      console.log("City: "+city);
      this.city = city;
  }
}

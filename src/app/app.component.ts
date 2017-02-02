import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //define como se llama el componente en la vista
  templateUrl: './app.component.html'//como se llama el template donde se usa el componente
})
export class AppComponent { }

/*



import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //define como se llama el componente en la vista
  templateUrl: './app.component',//como se llama el template donde se usa el componente
})

export class AppComponent { }


/* si agregas Implements OnInit a la clase tenes que implementar
la interfaz este interfaz
cuando construye un componente para la interfaz de usuario llama al metodo
antes que cualquier otra cosa
para testing es recomendable inicializar las cosas en este metodo
  ngOnInit() {
		this.refresh();
	}
*/

import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { ModuleWithProviders} from '@angular/core';
//aqui ponemos de cada ruta que componente
const appRoutes = [
  //cuando pongo books / y un id se visualiza este componete :quiere decir que es una variable de la url
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'books', component: BookListComponent }, //cuando es books va a booklistcomponent
  { path: '', redirectTo: 'books', pathMatch: 'full' } //cuando el path esta vacio se redirige a books pathMatch va en el default siempre
]
// las rutas se definen aqui en el routing y se exportan al NgModule
export const routing = RouterModule.forRoot(appRoutes);

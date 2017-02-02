
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule} from '@angular/http';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ItemComponent } from './item.component';
import { GoogleComponent } from './google.component';
import { VariosComponent } from './varios.component';

import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service'; //codigo generico y reutilizable

import { routing }  from './app.routing'; //importo el componente de routing y lo importo en el NgModule

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, ItemComponent, GoogleComponent, VariosComponent, BookDetailComponent, BookListComponent],
  imports: [BrowserModule, FormsModule,  HttpModule, JsonpModule , routing ],//BrowserModule tiene que estar sino puede ser solo nodejs
  bootstrap: [AppComponent],
  providers: [BookService]//si importo el servicio aca es global, si lo importo en un ocmponente esta para el y sus hijos
})
//esta clase nunca ba a tener codigo y solo esta para que exista la anotacion @NgModule
export class AppModule { }

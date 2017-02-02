import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'google',
  templateUrl: './google.component.html'
})

export class GoogleComponent {

  private books: string[] = [];
  /* Inyecto el objeto http */
  constructor(private http: Http) { }

  search(title: string) {
    this.books = [];

    let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;

    this.http.get(url).subscribe( //uso this http proque lo inyecté como private es decir metodo de clase.
      response => { //arrow function lo mismo que decir function tal()
        let data = response.json();//parseo a json la respuesta
        for (var i = 0; i < data.items.length; i++) {
          let bookTitle = data.items[i].volumeInfo.title;
          this.books.push(bookTitle);
        }
      },
      error => console.error(error)
    );
  }
}

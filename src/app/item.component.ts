import { Component } from '@angular/core';
import { Item } from './item.model';  //separo el modelo de datos al estilo meteor

@Component({
  selector: 'item',
  templateUrl: './item.component.html'
})
export class ItemComponent {

	private items: Item[] = [];

	addItem(description: string){
		this.items.push({description, checked: false});
	}

	removeItem(item){
  	let index = this.items.indexOf(item);
  	if(index > -1){		this.items.splice(index,1);	}
	}
}

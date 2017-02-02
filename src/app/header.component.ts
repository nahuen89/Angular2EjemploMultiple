import {Component, Input} from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    //@Input() anotación especial para recibir parámentros envez de recibirlos por el constructor
    @Input()
    private title: string;
}

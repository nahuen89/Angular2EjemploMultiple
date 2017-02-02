import {Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {

    @Output()
    hidden = new EventEmitter<boolean>();

    visible = true;

    click(){
        this.visible = !this.visible;
        this.hidden.emit(this.visible);
    }
    
    hiddenTitle(hidden: boolean){
        console.log("Hidden:"+hidden)
    }

}

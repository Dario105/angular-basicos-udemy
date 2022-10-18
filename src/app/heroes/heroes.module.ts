import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //exports son las cosas que quiero hacer publicas
    //o visibles
    exports:[
        ListadoComponent
    ],
    imports:[
        //todos los modulos unicamente
        //Se ocupa comonmodule ya que 
        //ofrece directivas como ngIf o ngFor
        CommonModule
    ]
})
export class heroesModule{

}
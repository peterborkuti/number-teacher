import { NgModule } from "@angular/core";
import { ProbdbMapComponent } from './show-probdb/probdb-map/probdb-map.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [ProbdbMapComponent],
    imports: [IonicModule, CommonModule],
    exports: [ProbdbMapComponent]
})
export class ComponentsModule {}
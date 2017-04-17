import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GMapService } from './gmap.service';

import { GMapComponent } from './gmap.component';

@NgModule({
    declarations: [
        GMapComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: GMapComponent }])
    ],
    exports: [
        GMapComponent
    ],
    providers: [
        GMapService
    ]
})

export class GMapModule
{

}

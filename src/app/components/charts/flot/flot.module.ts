import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FlotService } from './flot.service';

import { FlotComponent } from './flot.component';

@NgModule({
    declarations: [
        FlotComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: FlotComponent }])
    ],
    exports: [
        FlotComponent
    ],
    providers: [
        FlotService
    ]
})

export class FlotModule
{

}

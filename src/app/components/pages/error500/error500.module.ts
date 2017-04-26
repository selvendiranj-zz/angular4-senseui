import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Error500Component } from './error500.component';

@NgModule({
    declarations: [
        Error500Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: Error500Component }])
    ],
    exports: [
        Error500Component
    ],
    providers: [

    ]
})

export class Error500Module
{

}

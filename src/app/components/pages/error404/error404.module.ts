import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Error404Component } from './error404.component';

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: Error404Component }])
    ],
    exports: [
        Error404Component
    ],
    providers: [

    ]
})

export class Error404Module
{
}

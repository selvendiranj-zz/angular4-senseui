import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Home2Service } from './home2.service';

import { Home2Component } from './home2.component';

@NgModule({
    declarations: [
        Home2Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: Home2Component }])
    ],
    exports: [
        Home2Component
    ],
    providers: [
        Home2Service
    ]
})

export class Home2Module
{

}

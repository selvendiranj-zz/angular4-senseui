import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { Home3Service } from './home3.service';

import { Home3Component } from './home3.component';

@NgModule({
    declarations: [
        Home3Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: Home3Component }])
    ],
    exports: [
        Home3Component
    ],
    providers: [
        Home3Service
    ]
})

export class Home3Module
{

}

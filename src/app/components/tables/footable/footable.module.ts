import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FootableService } from './footable.service';

import { FootableComponent } from './footable.component';

@NgModule({
    declarations: [
        FootableComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: FootableComponent }])
    ],
    exports: [
        FootableComponent
    ],
    providers: [
        FootableService
    ]
})

export class FootableModule
{

}

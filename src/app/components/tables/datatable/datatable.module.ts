import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DatatableService } from './datatable.service';

import { DatatableComponent } from './datatable.component';

@NgModule({
    declarations: [
        DatatableComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: DatatableComponent }])
    ],
    exports: [
        DatatableComponent
    ],
    providers: [
        DatatableService
    ]
})

export class DatatableModule
{

}

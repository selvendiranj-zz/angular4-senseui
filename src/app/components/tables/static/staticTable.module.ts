import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { StaticTableService } from './staticTable.service';

import { StaticTableComponent } from './staticTable.component';

@NgModule({
    declarations: [
        StaticTableComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: StaticTableComponent }])
    ],
    exports: [
        StaticTableComponent
    ],
    providers: [
        StaticTableService
    ]
})

export class StaticTableModule
{

}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GridsComponent } from './grids.component';

@NgModule({
    declarations: [
        GridsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: GridsComponent }])
    ],
    exports: [
        GridsComponent
    ],
    providers: [

    ]
})

export class GridsModule
{

}

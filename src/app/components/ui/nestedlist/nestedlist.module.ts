import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { NestedListService } from './nestedlist.service';
import { NestedListComponent } from './nestedlist.component';

@NgModule({
    declarations: [
        NestedListComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: NestedListComponent }])
    ],
    exports: [
        NestedListComponent
    ],
    providers: [
        NestedListService
    ]
})

export class NestedListModule
{

}

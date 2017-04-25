import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { BlankComponent } from './blank.component';

@NgModule({
    declarations: [
        BlankComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: BlankComponent }])
    ],
    exports: [
        BlankComponent
    ],
    providers: [

    ]
})

export class BlankModule
{

}

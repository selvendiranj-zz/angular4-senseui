import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HorzMenuComponent } from './horzmenu.component';

@NgModule({
    declarations: [
        HorzMenuComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: HorzMenuComponent }])
    ],
    exports: [
        HorzMenuComponent
    ],
    providers: [

    ]
})

export class HorzMenuModule
{

}

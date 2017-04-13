import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { SwitcheryService } from './switchery.service';

import { SwitcheryComponent } from './switchery.component';

@NgModule({
    declarations: [
        SwitcheryComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: SwitcheryComponent }])
    ],
    exports: [
        SwitcheryComponent
    ],
    providers: [
        SwitcheryService
    ]
})

export class SwitcheryModule
{

}

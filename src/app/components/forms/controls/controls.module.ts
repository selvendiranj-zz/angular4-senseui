import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ControlsService } from './controls.service';

import { ControlsComponent } from './controls.component';

@NgModule({
    declarations: [
        ControlsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ControlsComponent }])
    ],
    exports: [
        ControlsComponent
    ],
    providers: [
        ControlsService
    ]
})

export class ControlsModule
{

}

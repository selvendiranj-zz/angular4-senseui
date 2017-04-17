import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { WidgetsService } from './widgets.service';

import { WidgetsComponent } from './widgets.component';

@NgModule({
    declarations: [
        WidgetsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: WidgetsComponent }])
    ],
    exports: [
        WidgetsComponent
    ],
    providers: [
        WidgetsService
    ]
})

export class WidgetsModule
{

}

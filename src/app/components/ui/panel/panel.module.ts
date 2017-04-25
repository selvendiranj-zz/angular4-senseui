import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PanelService } from './panel.service';

import { PanelComponent } from './panel.component';

@NgModule({
    declarations: [
        PanelComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: PanelComponent }])
    ],
    exports: [
        PanelComponent
    ],
    providers: [
        PanelService
    ]
})

export class PanelModule
{

}

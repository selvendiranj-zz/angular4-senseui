import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TimelineComponent } from './timeline.component';

@NgModule({
    declarations: [
        TimelineComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: TimelineComponent }])
    ],
    exports: [
        TimelineComponent
    ],
    providers: [

    ]
})

export class TimelineModule
{

}

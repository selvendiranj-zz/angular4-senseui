import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { CalendarServcie } from './calendar.service';

import { routes } from './calendar.routing';
import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        CalendarComponent
    ],
    providers: [
        CalendarServcie
    ]
})

export class CalendarModule
{

}

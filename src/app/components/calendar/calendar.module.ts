import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { routes } from './calendar.routing';
import { CalendarComponent } from './calendar.component';

@NgModule({
    declarations: [
        CalendarComponent
    ],
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        CalendarComponent
    ],
    providers: [

    ]
})

export class CalendarModule
{

}

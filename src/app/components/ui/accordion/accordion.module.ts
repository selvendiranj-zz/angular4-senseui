import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AccordionComponent } from './accordion.component';

@NgModule({
    declarations: [
        AccordionComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AccordionComponent }])
    ],
    exports: [
        AccordionComponent
    ],
    providers: [

    ]
})

export class AccordionModule
{

}

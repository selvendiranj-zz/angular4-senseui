import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InvoiceComponent } from './invoice.component';

@NgModule({
    declarations: [
        InvoiceComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: InvoiceComponent }])
    ],
    exports: [
        InvoiceComponent
    ],
    providers: [

    ]
})

export class InvoiceModule
{

}

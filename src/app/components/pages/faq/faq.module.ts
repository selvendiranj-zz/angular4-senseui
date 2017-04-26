import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FaqComponent } from './faq.component';

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: FaqComponent }])
    ],
    exports: [
        FaqComponent
    ],
    providers: [

    ]
})

export class FaqModule
{

}

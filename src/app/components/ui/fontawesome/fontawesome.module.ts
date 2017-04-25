import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FontawesomeComponent } from './fontawesome.component';

@NgModule({
    declarations: [
        FontawesomeComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: FontawesomeComponent }])
    ],
    exports: [
        FontawesomeComponent
    ],
    providers: [

    ]
})

export class FontawesomeModule
{

}

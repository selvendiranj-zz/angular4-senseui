import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { XeditableService } from './xeditable.service';
import { XeditableComponent } from './xeditable.component';

@NgModule({
    declarations: [
        XeditableComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: XeditableComponent }])
    ],
    exports: [
        XeditableComponent
    ],
    providers: [
        XeditableService
    ]
})

export class XeditableModule
{

}

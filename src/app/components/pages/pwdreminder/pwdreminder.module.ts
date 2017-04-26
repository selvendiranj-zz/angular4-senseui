import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PwdreminderComponent } from './pwdreminder.component';

@NgModule({
    declarations: [
        PwdreminderComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: PwdreminderComponent }])
    ],
    exports: [
        PwdreminderComponent
    ],
    providers: [

    ]
})

export class PwdreminderModule
{
}

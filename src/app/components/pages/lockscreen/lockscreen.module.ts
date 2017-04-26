import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LockscreenComponent } from './lockscreen.component';

@NgModule({
    declarations: [
        LockscreenComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: LockscreenComponent }])
    ],
    exports: [
        LockscreenComponent
    ],
    providers: [

    ]
})

export class LockscreenModule
{
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MorrisService } from './morris.service';

import { MorrisComponent } from './morris.component';

@NgModule({
    declarations: [
        MorrisComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: MorrisComponent }])
    ],
    exports: [
        MorrisComponent
    ],
    providers: [
        MorrisService
    ]
})

export class MorrisModule
{

}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ComposeService } from './compose.service';

import { ComposeComponent } from './compose.component';

@NgModule({
    declarations: [
        ComposeComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ComposeComponent }])
    ],
    exports: [
        ComposeComponent
    ],
    providers: [
        ComposeService
    ]
})

export class ComposeModule
{

}

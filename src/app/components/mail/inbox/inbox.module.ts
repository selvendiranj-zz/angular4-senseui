import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { InboxService } from './inbox.service';

import { InboxComponent } from './inbox.component';

@NgModule({
    declarations: [
        InboxComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: InboxComponent }])
    ],
    exports: [
        InboxComponent
    ],
    providers: [
        InboxService
    ]
})

export class InboxModule
{

}

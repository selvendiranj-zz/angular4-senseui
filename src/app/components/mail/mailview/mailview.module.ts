import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { MailviewService } from './mailview.service';

import { MailviewComponent } from './mailview.component';

@NgModule({
    declarations: [
        MailviewComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: MailviewComponent }])
    ],
    exports: [
        MailviewComponent
    ],
    providers: [
        MailviewService
    ]
})

export class MailviewModule
{

}

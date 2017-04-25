import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        ButtonComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ButtonComponent }])
    ],
    exports: [
        ButtonComponent
    ],
    providers: [

    ]
})

export class ButtonModule
{

}

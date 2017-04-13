import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ValidationService } from './validation.service';

import { ValidationComponent } from './validation.component';

@NgModule({
    declarations: [
        ValidationComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ValidationComponent }])
    ],
    exports: [
        ValidationComponent
    ],
    providers: [
        ValidationService
    ]
})

export class ValidationModule
{

}

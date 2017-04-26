import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { RegisterComponent } from './register.component';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: RegisterComponent }])
    ],
    exports: [
        RegisterComponent
    ],
    providers: [

    ]
})

export class RegisterModule
{

}

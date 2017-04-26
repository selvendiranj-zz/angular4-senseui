import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: LoginComponent }])
    ],
    exports: [
        LoginComponent
    ],
    providers: [

    ]
})

export class LoginModule
{
}

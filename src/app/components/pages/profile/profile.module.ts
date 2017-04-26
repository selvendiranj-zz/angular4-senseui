import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ProfileComponent }])
    ],
    exports: [
        ProfileComponent
    ],
    providers: [

    ]
})

export class ProfileModule
{

}

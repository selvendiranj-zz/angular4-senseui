import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { IconsComponent } from './icons.component';

@NgModule({
    declarations: [
        IconsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: IconsComponent }])
    ],
    exports: [
        IconsComponent
    ],
    providers: [

    ]
})

export class IconsModule
{

}

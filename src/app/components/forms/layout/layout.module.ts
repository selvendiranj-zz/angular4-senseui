import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LayoutService } from './layout.service';

import { LayoutComponent } from './layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: LayoutComponent }])
    ],
    exports: [
        LayoutComponent
    ],
    providers: [
        LayoutService
    ]
})

export class LayoutModule
{

}

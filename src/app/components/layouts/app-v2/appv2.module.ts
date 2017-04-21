import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppV2Service } from './appv2.service';

import { AppV2Component } from './appv2.component';

@NgModule({
    declarations: [
        AppV2Component
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AppV2Component }])
    ],
    exports: [
        AppV2Component
    ],
    providers: [
        AppV2Service
    ]
})

export class AppV2Module
{

}

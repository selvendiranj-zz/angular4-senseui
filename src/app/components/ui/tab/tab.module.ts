import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TabComponent } from './tab.component';

@NgModule({
    declarations: [
        TabComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: TabComponent }])
    ],
    exports: [
        TabComponent
    ],
    providers: [

    ]
})

export class TabModule
{

}

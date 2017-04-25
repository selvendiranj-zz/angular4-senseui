import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ComponentsComponent } from './components.component';

@NgModule({
    declarations: [
        ComponentsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ComponentsComponent }])
    ],
    exports: [
        ComponentsComponent
    ],
    providers: [

    ]
})

export class ComponentsModule
{

}

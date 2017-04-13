import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { OrderviewService } from './orderview.service';

import { OrderviewComponent } from './orderview.component';

@NgModule({
    declarations: [
        OrderviewComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: OrderviewComponent }])
    ],
    exports: [
        OrderviewComponent
    ],
    providers: [
        OrderviewService
    ]
})

export class OrderviewModule
{

}

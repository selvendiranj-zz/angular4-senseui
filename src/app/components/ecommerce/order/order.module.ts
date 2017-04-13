import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { OrderService } from './order.service';

import { OrderComponent } from './order.component';

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: OrderComponent }])
    ],
    exports: [
        OrderComponent
    ],
    providers: [
        OrderService
    ]
})

export class OrderModule
{

}

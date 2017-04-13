import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { EcommerceService } from './ecommerce.service';

import { EcommerceComponent } from './ecommerce.component';

@NgModule({
    declarations: [
        EcommerceComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: EcommerceComponent }])
    ],
    exports: [
        EcommerceComponent
    ],
    providers: [
        EcommerceService
    ]
})

export class EcommerceModule
{

}

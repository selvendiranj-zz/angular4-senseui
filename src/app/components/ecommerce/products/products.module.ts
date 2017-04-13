import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ProductsService } from './products.service';

import { ProductsComponent } from './products.component';

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: ProductsComponent }])
    ],
    exports: [
        ProductsComponent
    ],
    providers: [
        ProductsService
    ]
})

export class ProductsModule
{

}

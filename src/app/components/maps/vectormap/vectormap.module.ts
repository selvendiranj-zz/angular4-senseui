import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { VectormapService } from './vectormap.service';

import { VectormapComponent } from './vectormap.component';

@NgModule({
    declarations: [
        VectormapComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: VectormapComponent }])
    ],
    exports: [
        VectormapComponent
    ],
    providers: [
        VectormapService
    ]
})

export class VectormapModule
{

}

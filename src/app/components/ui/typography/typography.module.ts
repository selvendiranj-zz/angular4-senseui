import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { TypographyService } from './typography.service';
import { TypographyComponent } from './typography.component';

@NgModule({
    declarations: [
        TypographyComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: TypographyComponent }])
    ],
    exports: [
        TypographyComponent
    ],
    providers: [
        TypographyService
    ]
})

export class TypographyModule
{

}

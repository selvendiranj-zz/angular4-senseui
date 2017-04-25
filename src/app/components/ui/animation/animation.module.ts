import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AnimationService } from './animation.service';

import { AnimationComponent } from './animation.component';

@NgModule({
    declarations: [
        AnimationComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: AnimationComponent }])
    ],
    exports: [
        AnimationComponent
    ],
    providers: [
        AnimationService
    ]
})

export class AnimationModule
{

}

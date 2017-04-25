import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DragDropService } from './dragdrop.service';
import { DragdropComponent } from './dragdrop.component';

@NgModule({
    declarations: [
        DragdropComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: DragdropComponent }])
    ],
    exports: [
        DragdropComponent
    ],
    providers: [
        DragDropService
    ]
})

export class DragdropModule
{

}

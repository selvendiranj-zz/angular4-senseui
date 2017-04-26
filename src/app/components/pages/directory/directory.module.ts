import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DirectoryComponent } from './directory.component';

@NgModule({
    declarations: [
        DirectoryComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: DirectoryComponent }])
    ],
    exports: [
        DirectoryComponent
    ],
    providers: [

    ]
})

export class DirectoryModule
{
}

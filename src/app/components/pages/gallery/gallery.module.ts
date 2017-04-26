import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { GalleryService } from './gallery.service';
import { GalleryComponent } from './gallery.component';

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        RouterModule.forChild([{ path: '', component: GalleryComponent }])
    ],
    exports: [
        GalleryComponent
    ],
    providers: [
        GalleryService
    ]
})

export class GalleryModule
{

}

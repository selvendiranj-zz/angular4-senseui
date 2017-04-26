import { Component, AfterViewInit } from '@angular/core';
import { GalleryService } from './gallery.service';

@Component({
    selector: 'senseui-gallery',
    templateUrl: './gallery.component.html'
})

export class GalleryComponent implements AfterViewInit
{
    private gallerySvc: GalleryService;

    public constructor(gallerySvc: GalleryService)
    {
        this.gallerySvc = gallerySvc;
    }

    public ngAfterViewInit(): void
    {
        this.gallerySvc.initGallery();
    }
}

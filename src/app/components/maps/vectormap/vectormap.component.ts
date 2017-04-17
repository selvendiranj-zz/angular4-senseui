import { Component, AfterViewInit } from '@angular/core';
import { VectormapService } from './vectormap.service';

@Component({
    selector: 'senseui-vectormap',
    templateUrl: './vectormap.component.html'
})

export class VectormapComponent implements AfterViewInit
{
    private vectormapSvc: VectormapService;

    public constructor(vectormapSvc: VectormapService)
    {
        this.vectormapSvc = vectormapSvc;
    }

    public ngAfterViewInit(): void
    {
        this.vectormapSvc.InitVectormap();
    }
}

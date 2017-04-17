import { Component, AfterViewInit } from '@angular/core';
import { ScriptService } from '../../../shared/script.service';
import { GMapService } from './gmap.service';

@Component({
    selector: 'senseui-gmap',
    templateUrl: './gmap.component.html'
})

export class GMapComponent implements AfterViewInit
{
    private gmapSvc: GMapService;

    public constructor(gmapSvc: GMapService)
    {
        this.gmapSvc = gmapSvc;
    }

    public ngAfterViewInit(): void
    {
        this.gmapSvc.InitGMap();
    }
}

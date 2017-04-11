import { Component, AfterViewInit } from '@angular/core';
import { FlotService } from './flot.service';

@Component({
    selector: 'senseui-flot',
    templateUrl: './flot.component.html'
})

export class FlotComponent implements AfterViewInit
{
    private flotSvc: FlotService;

    public constructor(flotSvc: FlotService)
    {
        this.flotSvc = flotSvc;
    }

    public ngAfterViewInit(): void
    {
        this.flotSvc.InitFlot();
    }
}

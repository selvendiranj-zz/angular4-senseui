import { Component, AfterViewInit } from '@angular/core';
import { ControlsService } from './controls.service';

@Component({
    selector: 'senseui-controls',
    templateUrl: './controls.component.html'
})

export class ControlsComponent implements AfterViewInit
{
    private controlsSvc: ControlsService;

    public constructor(controlsSvc: ControlsService)
    {
        this.controlsSvc = controlsSvc;
    }

    public ngAfterViewInit(): void
    {
        this.controlsSvc.InitControls();
    }
}

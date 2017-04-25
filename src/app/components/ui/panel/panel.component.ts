import { Component, AfterViewInit } from '@angular/core';
import { PanelService } from './panel.service';

@Component({
    selector: 'senseui-panel',
    templateUrl: './panel.component.html'
})

export class PanelComponent implements AfterViewInit
{
    private panelSvc: PanelService;

    public constructor(panelSvc: PanelService)
    {
        this.panelSvc = panelSvc;
    }

    public ngAfterViewInit(): void
    {
        this.panelSvc.initPanel();
    }
}

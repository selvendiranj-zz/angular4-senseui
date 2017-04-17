import { Component, AfterViewInit } from '@angular/core';
import { ScriptService } from '../../../shared/script.service';
import { WidgetsService } from './widgets.service';

@Component({
    selector: 'senseui-widgets',
    templateUrl: './widgets.component.html'
})

export class WidgetsComponent implements AfterViewInit
{
    private widgetsSvc: WidgetsService;

    public constructor(widgetsSvc: WidgetsService)
    {
        this.widgetsSvc = widgetsSvc;
    }

    public ngAfterViewInit(): void
    {
        this.widgetsSvc.InitWidgets();
    }
}

import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from './layout.service';

@Component({
    selector: 'senseui-layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent implements AfterViewInit
{
    private layoutSvc: LayoutService;

    public constructor(layoutSvc: LayoutService)
    {
        this.layoutSvc = layoutSvc;
    }

    public ngAfterViewInit(): void
    {
        this.layoutSvc.InitLayout();
    }
}

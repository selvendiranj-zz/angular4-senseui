import { Component, AfterViewInit } from '@angular/core';
import { AppV2Service } from './appv2.service';

@Component({
    selector: 'senseui-appv2',
    templateUrl: './appv2.component.html'
})

export class AppV2Component implements AfterViewInit
{
    private appv2Svc: AppV2Service;

    public constructor(appv2Svc: AppV2Service)
    {
        this.appv2Svc = appv2Svc;
    }

    public ngAfterViewInit(): void
    {
        this.appv2Svc.initAppV2();
    }
}

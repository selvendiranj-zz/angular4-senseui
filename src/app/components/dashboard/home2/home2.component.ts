import { Component, AfterViewInit } from '@angular/core';
import { Home2Service } from './home2.service';

@Component({
    selector: 'senseui-home2',
    templateUrl: './home2.component.html'
})

export class Home2Component implements AfterViewInit
{
    private home2Svc: Home2Service;

    public constructor(home2Svc: Home2Service)
    {
        this.home2Svc = home2Svc;
    }

    public ngAfterViewInit(): void
    {
        this.home2Svc.InitHome2();
    }
}

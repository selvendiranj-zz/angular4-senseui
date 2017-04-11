import { Component, AfterViewInit } from '@angular/core';
import { Home1Service } from './home1.service';

@Component({
    selector: 'senseui-home1',
    templateUrl: './home1.component.html'
})

export class Home1Component implements AfterViewInit
{
    private home1Svc: Home1Service;

    public constructor(home1Svc: Home1Service)
    {
        this.home1Svc = home1Svc;
    }

    public ngAfterViewInit(): void
    {
        this.home1Svc.InitHome1();
    }
}

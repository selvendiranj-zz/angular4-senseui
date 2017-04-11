import { Component, AfterViewInit } from '@angular/core';
import { Home3Service } from './home3.service';

@Component({
    selector: 'senseui-home3',
    templateUrl: './home3.component.html'
})

export class Home3Component implements AfterViewInit
{
    private home3Svc: Home3Service;

    public constructor(home2Svc: Home3Service)
    {
        this.home3Svc = home2Svc;
    }

    public ngAfterViewInit(): void
    {
        this.home3Svc.InitHome2();
    }
}

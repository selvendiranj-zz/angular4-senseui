import { Component, AfterViewInit } from '@angular/core';
import { MorrisService } from './morris.service';

@Component({
    selector: 'senseui-morris',
    templateUrl: './morris.component.html'
})

export class MorrisComponent implements AfterViewInit
{
    private morrisSvc: MorrisService;

    public constructor(morrisSvc: MorrisService)
    {
        this.morrisSvc = morrisSvc;
    }

    public ngAfterViewInit(): void
    {
        this.morrisSvc.InitMorris();
    }
}

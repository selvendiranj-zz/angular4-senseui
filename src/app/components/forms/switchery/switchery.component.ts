import { Component, AfterViewInit } from '@angular/core';
import { SwitcheryService } from './switchery.service';

@Component({
    selector: 'senseui-switchery',
    templateUrl: './switchery.component.html'
})

export class SwitcheryComponent implements AfterViewInit
{
    private switcherySvc: SwitcheryService;

    public constructor(switcherySvc: SwitcheryService)
    {
        this.switcherySvc = switcherySvc;
    }

    public ngAfterViewInit(): void
    {
        this.switcherySvc.InitSwitchery();
    }
}

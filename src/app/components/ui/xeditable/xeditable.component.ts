import { Component, AfterViewInit } from '@angular/core';
import { XeditableService } from './xeditable.service';

@Component({
    selector: 'senseui-xeditable',
    templateUrl: './xeditable.component.html'
})

export class XeditableComponent implements AfterViewInit
{
    private xeditableSvc: XeditableService;

    public constructor(xeditableSvc: XeditableService)
    {
        this.xeditableSvc = xeditableSvc;
    }

    public ngAfterViewInit(): void
    {
        this.xeditableSvc.initXeditable();
    }
}

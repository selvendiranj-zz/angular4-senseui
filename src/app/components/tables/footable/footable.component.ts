import { Component, AfterViewInit } from '@angular/core';
import { FootableService } from './footable.service';

@Component({
    selector: 'senseui-footable',
    templateUrl: './footable.component.html'
})

export class FootableComponent implements AfterViewInit
{
    private ftSvc: FootableService;

    public constructor(ftSvc: FootableService)
    {
        this.ftSvc = ftSvc;
    }

    public ngAfterViewInit(): void
    {
        this.ftSvc.initFootable();
    }
}

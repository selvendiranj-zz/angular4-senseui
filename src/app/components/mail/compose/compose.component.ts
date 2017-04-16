import { Component, AfterViewInit } from '@angular/core';
import { ComposeService } from './compose.service';

@Component({
    selector: 'senseui-compose',
    templateUrl: './compose.component.html'
})

export class ComposeComponent implements AfterViewInit
{
    private compSvc: ComposeService;

    public constructor(compSvc: ComposeService)
    {
        this.compSvc = compSvc;
    }

    public ngAfterViewInit(): void
    {
        this.compSvc.InitCompose();
    }
}

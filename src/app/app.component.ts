import { Component, AfterViewInit } from '@angular/core';
import { AppService } from './shared/app.service';
import { ScriptService } from './shared/script.service';

@Component({
    selector: 'senseui',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit
{
    private scriptSvc: ScriptService;

    public constructor(scriptSvc: ScriptService)
    {
        this.scriptSvc = scriptSvc;
    }

    public ngAfterViewInit(): void
    {
        this.scriptSvc.loadCompScript('AppComponent');
    }
}

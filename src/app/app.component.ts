import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppService } from './shared/app.service';
import { ScriptService } from './shared/script.service';

@Component({
    selector: 'senseui',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit, AfterViewInit
{
    private appSvc: AppService;
    private scriptSvc: ScriptService;

    public constructor(appSvc: AppService, scriptSvc: ScriptService)
    {
        this.appSvc = appSvc;
        this.scriptSvc = scriptSvc;
    }

    public ngOnInit(): void
    {
        // this.scriptSvc.loadCompScript('AppComponent');
    }

    public ngAfterViewInit(): void
    {
        this.appSvc.InitApp();
    }
}

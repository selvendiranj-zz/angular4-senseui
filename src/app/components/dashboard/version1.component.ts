import { Component, AfterViewInit } from '@angular/core';
import { SenseUIScripts } from '../../shared/senseui-scripts';
import { ScriptService } from '../../shared/script.service';

@Component({
    selector: 'senseui',
    templateUrl: './version1.component.html'
})

export class Version1Component implements AfterViewInit
{
    private scriptSvc: ScriptService;

    public constructor(scriptSvc: ScriptService)
    {
        this.scriptSvc = scriptSvc;
    }

    public ngAfterViewInit(): void
    {
        this.scriptSvc.loadCompScript('Version1Component');
    }
}

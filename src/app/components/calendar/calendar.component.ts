import { Component, AfterViewInit } from '@angular/core';
import { ScriptService } from '../../shared/script.service';
import { CalendarServcie } from './calendar.service';

@Component({
    moduleId: module.id,
    selector: 'senseui-calendar',
    templateUrl: './calendar.component.html'
})

export class CalendarComponent implements AfterViewInit
{
    private scriptSvc: ScriptService;
    private calService: CalendarServcie;

    public constructor(scriptSvc: ScriptService, calService: CalendarServcie)
    {
        this.scriptSvc = scriptSvc;
        this.calService = calService;
    }

    public ngAfterViewInit(): void
    {
        // this.scriptSvc.loadCompScript('CalendarComponent');
        this.calService.InitCalendar();
    }
}

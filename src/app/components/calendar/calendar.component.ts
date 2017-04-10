import { Component, AfterViewInit } from '@angular/core';
import { ScriptService } from '../../shared/script.service';

@Component({
    moduleId: module.id,
    selector: 'senseui-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['../../../assets/bower_components/fullcalendar/dist/fullcalendar.min.css']
})

export class CalendarComponent implements AfterViewInit
{
    private scriptSvc: ScriptService;

    public constructor(scriptSvc: ScriptService)
    {
        this.scriptSvc = scriptSvc;
    }

    public ngAfterViewInit(): void
    {
        this.scriptSvc.loadCompScript('CalendarComponent');
    }
}

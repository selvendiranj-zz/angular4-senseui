import { Component, AfterViewInit } from '@angular/core';
import { CalendarServcie } from './calendar.service';

@Component({
    moduleId: module.id,
    selector: 'senseui-calendar',
    templateUrl: './calendar.component.html'
})

export class CalendarComponent implements AfterViewInit
{
    private calService: CalendarServcie;

    public constructor(calService: CalendarServcie)
    {
        this.calService = calService;
    }

    public ngAfterViewInit(): void
    {
        this.calService.InitCalendar();
    }
}

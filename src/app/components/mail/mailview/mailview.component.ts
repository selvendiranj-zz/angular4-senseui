import { Component, AfterViewInit } from '@angular/core';
import { MailviewService } from './mailview.service';

@Component({
    selector: 'senseui-mailview',
    templateUrl: './mailview.component.html'
})

export class MailviewComponent implements AfterViewInit
{
    private mailviewSvc: MailviewService;

    public constructor(mailviewSvc: MailviewService)
    {
        this.mailviewSvc = mailviewSvc;
    }

    public ngAfterViewInit(): void
    {
        this.mailviewSvc.InitMailview();
    }
}

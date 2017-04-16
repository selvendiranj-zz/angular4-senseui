import { Component, AfterViewInit } from '@angular/core';
import { InboxService } from './inbox.service';

@Component({
    selector: 'senseui-inbox',
    templateUrl: './inbox.component.html'
})

export class InboxComponent implements AfterViewInit
{
    private inboxSvc: InboxService;

    public constructor(inboxSvc: InboxService)
    {
        this.inboxSvc = inboxSvc;
    }

    public ngAfterViewInit(): void
    {
        this.inboxSvc.InitInbox();
    }
}

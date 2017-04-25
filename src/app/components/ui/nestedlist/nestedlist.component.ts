import { Component, AfterViewInit } from '@angular/core';
import { NestedListService } from './nestedlist.service';

@Component({
    selector: 'senseui-nestedlist',
    templateUrl: './nestedlist.component.html'
})

export class NestedListComponent implements AfterViewInit
{
    private nestedListSvc: NestedListService;

    public constructor(nestedListSvc: NestedListService)
    {
        this.nestedListSvc = nestedListSvc;
    }

    public ngAfterViewInit(): void
    {
        this.nestedListSvc.initNestedList();
    }
}

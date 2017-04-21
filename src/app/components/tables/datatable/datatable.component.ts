import { Component, AfterViewInit } from '@angular/core';
import { DatatableService } from './datatable.service';

@Component({
    selector: 'senseui-datatable',
    templateUrl: './datatable.component.html'
})

export class DatatableComponent implements AfterViewInit
{
    private dtSvc: DatatableService;

    public constructor(dtSvc: DatatableService)
    {
        this.dtSvc = dtSvc;
    }

    public ngAfterViewInit(): void
    {
        this.dtSvc.initDatatable();
    }
}

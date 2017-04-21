import { Component, AfterViewInit } from '@angular/core';
import { StaticTableService } from './staticTable.service';

@Component({
    selector: 'senseui-staticTable',
    templateUrl: './staticTable.component.html'
})

export class StaticTableComponent implements AfterViewInit
{
    private staticTblSvc: StaticTableService;

    public constructor(staticTblSvc: StaticTableService)
    {
        this.staticTblSvc = staticTblSvc;
    }

    public ngAfterViewInit(): void
    {
        this.staticTblSvc.InitStaticTable();
    }
}

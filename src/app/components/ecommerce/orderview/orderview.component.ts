import { Component, AfterViewInit } from '@angular/core';
import { OrderviewService } from './orderview.service';

@Component({
    selector: 'senseui-orderview',
    templateUrl: './orderview.component.html'
})

export class OrderviewComponent implements AfterViewInit
{
    private orderviewSvc: OrderviewService;

    public constructor(orderviewSvc: OrderviewService)
    {
        this.orderviewSvc = orderviewSvc;
    }

    public ngAfterViewInit(): void
    {
        this.orderviewSvc.InitOrderview();
    }
}

import { Component, AfterViewInit } from '@angular/core';
import { OrderService } from './order.service';

@Component({
    selector: 'senseui-order',
    templateUrl: './order.component.html'
})

export class OrderComponent implements AfterViewInit
{
    private orderSvc: OrderService;

    public constructor(orderSvc: OrderService)
    {
        this.orderSvc = orderSvc;
    }

    public ngAfterViewInit(): void
    {
        this.orderSvc.InitOrder();
    }
}

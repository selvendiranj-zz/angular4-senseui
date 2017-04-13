import { Component, AfterViewInit } from '@angular/core';
import { EcommerceService } from './ecommerce.service';

@Component({
    selector: 'senseui-ecommerce',
    templateUrl: './ecommerce.component.html'
})

export class EcommerceComponent implements AfterViewInit
{
    private ecomSvc: EcommerceService;

    public constructor(ecomSvc: EcommerceService)
    {
        this.ecomSvc = ecomSvc;
    }

    public ngAfterViewInit(): void
    {
        this.ecomSvc.InitEcommerce();
    }
}

import { Component, AfterViewInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
    selector: 'senseui-products',
    templateUrl: './products.component.html'
})

export class ProductsComponent implements AfterViewInit
{
    private productsSvc: ProductsService;

    public constructor(productsSvc: ProductsService)
    {
        this.productsSvc = productsSvc;
    }

    public ngAfterViewInit(): void
    {
        this.productsSvc.InitProducts();
    }
}

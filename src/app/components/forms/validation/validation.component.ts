import { Component, AfterViewInit } from '@angular/core';
import { ValidationService } from './validation.service';

@Component({
    selector: 'senseui-validation',
    templateUrl: './validation.component.html'
})

export class ValidationComponent implements AfterViewInit
{
    private validationSvc: ValidationService;

    public constructor(validationSvc: ValidationService)
    {
        this.validationSvc = validationSvc;
    }

    public ngAfterViewInit(): void
    {
        this.validationSvc.InitValidation();
    }
}

import { Component, AfterViewInit } from '@angular/core';
import { TypographyService } from './typography.service';

@Component({
    selector: 'senseui-typography',
    templateUrl: './typography.component.html'
})

export class TypographyComponent implements AfterViewInit
{
    private typographySvc: TypographyService;

    public constructor(typographySvc: TypographyService)
    {
        this.typographySvc = typographySvc;
    }

    public ngAfterViewInit(): void
    {
        this.typographySvc.initTypography();
    }
}

import { Component, AfterViewInit } from '@angular/core';
import { SenseUIScripts } from './shared/senseui-scripts';

import * as $ from 'jquery';

@Component({
    selector: 'senseui',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit
{
    public ngAfterViewInit(): void
    {
        new SenseUIScripts();
    }
}

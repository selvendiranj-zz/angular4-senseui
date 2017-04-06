import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'senseui-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit
{
    public ngOnInit(): void
    {
        $('#profilebtn').click(function (): any
        {
            $('#profilebody').slideToggle();
        });
    }
}

import { Component } from '@angular/core';
import { routes } from './sidenav.routes';

@Component({
    selector: 'senseui-sidenav',
    templateUrl: './sidenav.component.html'
})

export class SidenavComponent
{
    public menuItems: any[] = routes;
}

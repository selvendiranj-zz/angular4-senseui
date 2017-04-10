import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AsidebarComponent } from './asidebar/asidebar.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        AsidebarComponent,
        SettingsComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        AsidebarComponent,
        SettingsComponent,
        RouterModule
    ],
    providers: [

    ]
})

export class SenseuiCommonModule
{

}

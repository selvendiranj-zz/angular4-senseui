import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        AsidebarComponent,
        SettingsComponent
    ],
    providers: [

    ]
})

export class SenseuiCommonModule
{

}

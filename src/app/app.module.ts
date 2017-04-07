import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { AsidebarComponent } from './common/asidebar/asidebar.component';
import { SettingsComponent } from './common/settings/settings.component';

import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { Version1Component } from './components/dashboard/version1.component';
import { ScriptService } from './shared/script.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SidenavComponent,
        AsidebarComponent,
        SettingsComponent,
        Version1Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [
        ScriptService
    ],
    bootstrap: [AppComponent]
})

export class AppModule
{

}

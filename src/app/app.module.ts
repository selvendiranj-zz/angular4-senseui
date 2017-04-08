import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SenseuiCommonModule } from './common/senseui-common.module';

import { ScriptService } from './shared/script.service';
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { Version1Component } from './components/dashboard/version1.component';

@NgModule({
    declarations: [
        AppComponent,
        Version1Component
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SenseuiCommonModule,
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

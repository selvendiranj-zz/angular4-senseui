import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SenseuiCommonModule } from './common/senseui-common.module';
import { Home1Module } from './components/dashboard/home1/home1.module';

import { ScriptService } from './shared/script.service';
import { routes } from './app.routing';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SenseuiCommonModule,
        Home1Module,
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

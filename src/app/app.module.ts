import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SenseuiCommonModule } from './common/senseui-common.module';

import { AppService } from './shared/app.service';
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
        RouterModule.forRoot(routes, { useHash: true })
    ],
    providers: [
        AppService, ScriptService
    ],
    bootstrap: [AppComponent]
})

export class AppModule
{

}

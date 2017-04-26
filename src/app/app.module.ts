import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

import { SenseuiCommonModule } from './common/senseui-common.module';

import { AppService } from './shared/app.service';
import { ScriptService } from './shared/script.service';
import { SenseuiService } from './shared/senseui.service';
import { MainnavService } from './shared/mainnav.service';
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
        ScriptService,
        SenseuiService,
        MainnavService,
        AppService
    ],
    bootstrap: [AppComponent]
})

export class AppModule
{
    private router: Router;
    public constructor(router: Router)
    {
        router.events
            .filter((event: any) => event instanceof NavigationEnd)
            .subscribe((event: NavigationEnd) =>
            {
                // We only receive NavigationEnd events
                switch (event.url)
                {
                    case '/layouts/boxed':
                    case '/layouts/horzboxed':
                        $('#container').removeClass('effect mainnav-lg navbar-fixed mainnav-fixed');
                        $('#container').addClass('effect mainnav-lg boxed-layout');
                        $('#navbar').addClass('navbar-boxed');
                        if(event.url === '/layouts/horzboxed')
                        {
                            this.router.navigate(['/layouts/horzmenu']);
                        }
                        break;
                    case '/layouts/blank':
                        $('#container').removeClass('effect mainnav-lg boxed-layout');
                        $('#navbar').removeClass('navbar-boxed');
                        $('#container').addClass('effect mainnav-lg navbar-fixed mainnav-fixed');
                        break;
                    case '/layouts/pushmenu':
                        $.senseuiNav('pushToggle');
                        break;
                    case '/layouts/slidemenu':
                        $.senseuiNav('slideToggle');
                        break;
                    case '/layouts/sidebar':
                        $.senseuiNav('colExpToggle');
                        break;
                    default:
                        break;
                }
            });
    }
}

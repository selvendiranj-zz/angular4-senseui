
// LAYOUT APP V2
// ====================================================================

import { Injectable } from '@angular/core';

@Injectable()
export class AppV2Service
{

    public initAppV2(): any
    {
        $('#appscrolldiv').slimscroll({
            height: '450'
        });

        $('#appscrolldiv3').slimscroll({
            height: '585'
        });

        $('#demo-tab-scroll').slimscroll({
            height: '450'
        });

        $('#demo-tab-scroll-2').slimscroll({
            height: '450'
        });

        $('#demo-tab-scroll-3').slimscroll({
            height: '450'
        });
    }
}


// tslint:disable-next-line:max-file-line-count
// Form-Layout
// ====================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class LayoutService
{
    public InitLayout(): any
    {
        // PANEL WITH BUTTONS - LOADING OVERLAY
        // =================================================================
        // Require Nifty Admin Javascript
        // http://www.themeon.net/
        // =================================================================
        $('.demo-panel-ref-btn').jasmineOverlay().on('click', function (): any
        {
            let $el = $(this);
            let relTime: any;

            $el.jasmineOverlay('show');

            // Do something...

            relTime = setInterval(function (): any
            {
                // Hide the screen overlay
                $el.jasmineOverlay('hide');

                clearInterval(relTime);
            }, 2000);
        });

        // FULLSCREEN PANEL
        // =================================================================
        // Require Nifty Admin Javascript
        // http://www.themeon.net/
        // =================================================================

        $('[data-click=panel-expand]').click(function (e: any): any
        {
            e.preventDefault();
            let t = $(this).closest('.panel');
            if ($('body').hasClass('panel-expand') && $(t).hasClass('panel-expand'))
            {
                $('body, .panel').removeClass('panel-expand');
                $('.panel').removeAttr('style');
            } else
            {
                $('body').addClass('panel-expand');
                $(this).closest('.panel').addClass('panel-expand');
            }
            $(window).trigger('resize');
        });

        // COLLAPSE PANEL
        // =================================================================
        // Require Nifty Admin Javascript
        // http://www.themeon.net/
        // =================================================================

        $('[data-click=panel-collapse]').click(function (e: any): any
        {
            e.preventDefault();
            $(this).closest('.panel').find('.panel-body').slideToggle();
        });

        // RELOAD PANEL
        // =================================================================
        // Require Nifty Admin Javascript
        // http://www.themeon.net/
        // =================================================================

        $('[data-click=panel-reload]').click(function (e: any): any
        {
            e.preventDefault();
            let t = $(this).closest('.panel');
            if (!$(t).hasClass('panel-loading'))
            {
                let n = $(t).find('.panel-body');
                let r = '<div class="panel-loader"><span class="spinner-small"></span></div>';
                $(t).addClass('panel-loading');
                $(n).prepend(r);
                setTimeout(function (): any
                {
                    $(t).removeClass('panel-loading');
                    $(t).find('.panel-loader').remove();
                }, 2000);
            }
        });
    }
}

// UI-Panels.js
// =================================================================
// UI DRAG & DROP PANEL
// =================================================================
// Require Bootstrap Button
// http://getbootstrap.com/javascript/#buttons
// =================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class PanelService
{
    public initPanel(): any
    {
        $('.grid').sortable({
            tolerance: 'pointer',
            revert: 'invalid',
            handle: '.panel-heading',
            connectWith: '.row > [class*=col]',
            placeholder: 'well placeholder tile',
            forceHelperSize: true
        });

        // PANEL WITH SWITCH - TURN YOUR DEFAULT CHECKBOX INTO BEAUTIFUL IOS 7 STYLE SWITCHES.
        // =================================================================
        // Require Switchery
        // http://abpetkov.github.io/switchery/
        // =================================================================
        // tslint:disable-next-line:no-unused-new
        new Switchery(document.getElementById('demo-panel-w-switch'));

        // FULLSCREEN PANEL
        // =================================================================
        // Require Nifty Admin Javascript
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
        // =================================================================
        $('[data-click=panel-collapse]').click(function (e: any): any
        {
            e.preventDefault();
            $(this).closest('.panel').find('.panel-body').slideToggle();
        });

        // RELOAD PANEL
        // =================================================================
        // Require Nifty Admin Javascript
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

        // PANEL WITH VARIETY OF COMPONENTS - DEMO AUTO CLOSE ALERTS
        // =================================================================
        // Require Nifty Admin Javascript
        // =================================================================
        $('#demo-panel-alert').on('click', function (): any
        {
            $.senseuiNoty({
                type: 'primary',
                container: '#demo-panel-w-alert',
                html: '<strong>Well done!</strong> You successfully read this important alert message.',
                focus: false,
                timer: 2000
            });
        });

        // PANEL WITH VARIETY OF COMPONENTS - DEMO STICKY ALERTS
        // =================================================================
        // Require Nifty Admin Javascript
        // =================================================================
        $('#demo-panel-alert2').on('click', function (): any
        {
            $.senseuiNoty({
                type: 'success',
                container: '#demo-panel-w-alert',
                html: `
                    <div class="media-left">
                        <span class="icon-wrap icon-wrap-xs icon-circle alert-icon">
                            <i class="fa fa-thumbs-up fa-lg"></i>
                        </span>
                    </div>
                    <div class="media-body">
                        <h4 class="alert-title">Successfully Saved</h4>
                        <p class="alert-message">Your Settings Successfully Saved</p>
                    </div>`,
                focus: false
            });
        });
    }
}

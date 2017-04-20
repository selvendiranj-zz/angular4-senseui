import { Injectable } from '@angular/core';

@Injectable()
export class Senseui
{
    public container: any;
    public contentContainer: any;
    public navbar: any;
    public mainNav: any;
    public aside: any;
    public footer: any;
    public scrollTop: any;
    public window: any;
    public body: any;
    public bodyHtml: any;
    public document: any;
    public screenSize: any; // return value xs, sm, md, lg
    public isMobile: any;
    public transition: any;

    public InitSenseui(): any
    {
        this.container = $('#container');
        this.contentContainer = $('#content-container');
        this.navbar = $('#navbar');
        this.mainNav = $('#mainnav-container');
        this.aside = $('#aside-container');
        this.footer = $('#footer');
        this.scrollTop = $('#scroll-top');
        this.window = $(window);
        this.body = $('body');
        this.bodyHtml = $('body, html');
        this.document = $(document);
        this.screenSize = ''; // return value xs, sm, md, lg

        this.isMobile = this.getIsMobile();
        this.transition = this.getTransition();
    }

    public getIsMobile(): any
    {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    public randomInt(min: any, max: any): any
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public getTransition(): any
    {
        let thisBody = document.body || document.documentElement;
        let thisStyle = thisBody.style;
        let support = thisStyle.transition !== undefined || thisStyle.webkitTransition !== undefined;
        return support;
    }
}

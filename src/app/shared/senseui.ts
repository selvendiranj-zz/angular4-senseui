
export class Senseui
{
    private static _instance: Senseui;

    public container: any = $('#container');
    public contentContainer: any = $('#content-container');
    public navbar: any = $('#navbar');
    public mainNav: any = $('#mainnav-container');
    public aside: any = $('#aside-container');
    public footer: any = $('#footer');
    public scrollTop: any = $('#scroll-top');
    public window: any = $(window);
    public body: any = $('body');
    public bodyHtml: any = $('body, html');
    public document: any = $(document);
    public screenSize: any = ''; // return value xs, sm, md, lg

    public static get Instance(): Senseui
    {
        return Senseui._instance || (Senseui._instance = new Senseui());
    }

    public InitSenseui(): any
    {
        this.isMobile();
        this.transition();
    }

    public isMobile(): any
    {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    public randomInt(min: any, max: any): any
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    public transition(): any
    {
        let thisBody = document.body || document.documentElement;
        let thisStyle = thisBody.style;
        let support = thisStyle.transition !== undefined || thisStyle.webkitTransition !== undefined;
        return support;
    }

    private constructor() { }
}

import { browser, element, by } from 'protractor';

export class Angular4Senseui
{
    public navigateTo(): any
    {
        return browser.get('/');
    }

    public getParagraphText(): any
    {
        return element(by.css('app-root h1')).getText();
    }
}

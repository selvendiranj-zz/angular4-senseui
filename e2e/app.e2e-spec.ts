import { Angular4Senseui } from './app.po';

describe('angular4-senseui App', () =>
{
    let page: Angular4Senseui;

    beforeEach(() =>
    {
        page = new Angular4Senseui();
    });

    it('should display message saying app works', () =>
    {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('app works!');
    });
});

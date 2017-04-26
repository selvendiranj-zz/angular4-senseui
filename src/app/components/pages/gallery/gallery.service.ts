
// Gallery
// ====================================================================
// GAMMA GALLERY
// =================================================================
// Require Gamma Gallery js
// https://github.com/codrops/GammaGallery
// =================================================================

import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService
{

    public initGallery(): any
    {
        let GammaSettings = {
            // order is important!
            viewport: [{
                width: 1200,
                columns: 5
            }, {
                width: 900,
                columns: 4
            }, {
                width: 500,
                columns: 3
            }, {
                width: 320,
                columns: 2
            }, {
                width: 0,
                columns: 2
            }]
        };

        Gamma.init(GammaSettings, fncallback);

        // Example how to add more items (just a dummy):

        let page = 0;
        let items = [`
            <li>
                <div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350">
                    <div data-src="assets/images/gamma/xxxlarge/3.jpg" data-min-width="1300"></div>
                    <div data-src="assets/images/gamma/xxlarge/3.jpg" data-min-width="1000"></div>
                    <div data-src="assets/images/gamma/xlarge/3.jpg" data-min-width="700"></div>
                    <div data-src="assets/images/gamma/large/3.jpg" data-min-width="300"></div>
                    <div data-src="assets/images/gamma/medium/3.jpg" data-min-width="200"></div>
                    <div data-src="assets/images/gamma/small/3.jpg" data-min-width="140"></div>
                    <div data-src="assets/images/gamma/xsmall/3.jpg"></div>
                    <noscript><img src="assets/images/gamma/xsmall/3.jpg" alt="img03"/></noscript>
                </div>
            </li>
            <li>
                <div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350">
                    <div data-src="assets/images/gamma/xxxlarge/3.jpg" data-min-width="1300"></div>
                    <div data-src="assets/images/gamma/xxlarge/3.jpg" data-min-width="1000"></div>
                    <div data-src="assets/images/gamma/xlarge/3.jpg" data-min-width="700"></div>
                    <div data-src="assets/images/gamma/large/3.jpg" data-min-width="300"></div>
                    <div data-src="assets/images/gamma/medium/3.jpg" data-min-width="200"></div>
                    <div data-src="assets/images/gamma/small/3.jpg" data-min-width="140"></div>
                    <div data-src="assets/images/gamma/xsmall/3.jpg"></div>
                    <noscript><img src="assets/images/gamma/xsmall/3.jpg" alt="img03"/></noscript>
                </div>
            </li>
            <li>
                <div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350">
                    <div data-src="assets/images/gamma/xxxlarge/3.jpg" data-min-width="1300"></div>
                    <div data-src="assets/images/gamma/xxlarge/3.jpg" data-min-width="1000"></div>
                    <div data-src="assets/images/gamma/xlarge/3.jpg" data-min-width="700"></div>
                    <div data-src="assets/images/gamma/large/3.jpg" data-min-width="300"></div>
                    <div data-src="assets/images/gamma/medium/3.jpg" data-min-width="200"></div>
                    <div data-src="assets/images/gamma/small/3.jpg" data-min-width="140"></div>
                    <div data-src="assets/images/gamma/xsmall/3.jpg"></div>
                    <noscript><img src="assets/images/gamma/xsmall/3.jpg" alt="img03"/></noscript>
                </div>
            </li>
            <li>
                <div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350">
                    <div data-src="assets/images/gamma/xxxlarge/3.jpg" data-min-width="1300"></div>
                    <div data-src="assets/images/gamma/xxlarge/3.jpg" data-min-width="1000"></div>
                    <div data-src="assets/images/gamma/xlarge/3.jpg" data-min-width="700"></div>
                    <div data-src="assets/images/gamma/large/3.jpg" data-min-width="300"></div>
                    <div data-src="assets/images/gamma/medium/3.jpg" data-min-width="200"></div>
                    <div data-src="assets/images/gamma/small/3.jpg" data-min-width="140"></div>
                    <div data-src="assets/images/gamma/xsmall/3.jpg"></div><noscript>
                    <img src="assets/images/gamma/xsmall/3.jpg" alt="img03"/></noscript></div>
            </li>
            <li>
                <div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350">
                    <div data-src="assets/images/gamma/xxxlarge/3.jpg" data-min-width="1300"></div>
                    <div data-src="assets/images/gamma/xxlarge/3.jpg" data-min-width="1000"></div>
                    <div data-src="assets/images/gamma/xlarge/3.jpg" data-min-width="700"></div>
                    <div data-src="assets/images/gamma/large/3.jpg" data-min-width="300"></div>
                    <div data-src="assets/images/gamma/medium/3.jpg" data-min-width="200"></div>
                    <div data-src="assets/images/gamma/small/3.jpg" data-min-width="140"></div>
                    <div data-src="assets/images/gamma/xsmall/3.jpg"></div>
                    <noscript><img src="assets/images/gamma/xsmall/3.jpg" alt="img03"/></noscript></div>
            </li>`];

        function fncallback(): any
        {

            $('#loadmore').show().on('click', function (): any
            {
                ++page;
                let newitems = items[page - 1];
                if (page <= 1)
                {
                    Gamma.add($(newitems));
                }
                if (page === 1)
                {
                    $(this).remove();
                }
            });
        }
    }
}

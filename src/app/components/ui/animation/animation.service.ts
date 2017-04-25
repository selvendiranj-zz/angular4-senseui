// UI-Animations
// =================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class AnimationService
{
    public initAnimation(): any
    {
        let _this = this;

        $('.js--triggerAnimation').click(function (e: any): any
        {
            e.preventDefault();
            let anim = $('.js--animations').val();
            _this.testAnimate(anim);
        });

        $('.js--animations').change(function (): any
        {
            let anim = $(this).val();
            _this.testAnimate(anim);
        });
    }

    public testAnimate(x: any): any
    {
        $('#animationSandbox').removeClass()
            .addClass(x + ' animated')
            .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (): any
            {
                $(this).removeClass();
            });
    }
}

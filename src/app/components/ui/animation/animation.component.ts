import { Component, AfterViewInit } from '@angular/core';
import { AnimationService } from './animation.service';

@Component({
    selector: 'senseui-animation',
    templateUrl: './animation.component.html'
})

export class AnimationComponent implements AfterViewInit
{
    private animationSvc: AnimationService;

    public constructor(animationSvc: AnimationService)
    {
        this.animationSvc = animationSvc;
    }

    public ngAfterViewInit(): void
    {
        this.animationSvc.initAnimation();
    }
}

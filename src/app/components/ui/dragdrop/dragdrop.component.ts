import { Component, AfterViewInit } from '@angular/core';
import { DragDropService } from './dragdrop.service';

@Component({
    selector: 'senseui-dragdrop',
    templateUrl: './dragdrop.component.html'
})

export class DragdropComponent implements AfterViewInit
{
    private dragdropSvc: DragDropService;

    public constructor(dragdropSvc: DragDropService)
    {
        this.dragdropSvc = dragdropSvc;
    }

    public ngAfterViewInit(): void
    {
        this.dragdropSvc.initDragDrop();
    }
}

// Ui DragDrop
// =================================================================
// UI DRAG & DROP PANEL
// =================================================================
// Require Bootstrap Button
// http://getbootstrap.com/javascript/#buttons
// =================================================================

import { Injectable } from '@angular/core';

@Injectable()
export class DragDropService
{
    public initDragDrop(): any
    {
        $('.grid').sortable({
            tolerance: 'pointer',
            revert: 'invalid',
            handle: '.panel-heading',
            connectWith: '.row > [class*=col]',
            placeholder: 'well placeholder tile',
            forceHelperSize: true
        });
    }
}


// UI-Nested-lists
// =================================================================

import { Injectable } from '@angular/core';

@Injectable()
export class NestedListService
{
    public initNestedList(): any
    {
        let _this = this;
        // activate Nestable for list 1
        $('#nestable_list_1').nestable({ group: 1 }).on('change', _this.updateOutput);

        // activate Nestable for list 2
        $('#nestable_list_2').nestable({ group: 1 }).on('change', _this.updateOutput);

        // output initial serialised data
        _this.updateOutput($('#nestable_list_1').data('output', $('#nestable_list_1_output')));
        _this.updateOutput($('#nestable_list_2').data('output', $('#nestable_list_2_output')));

        $('#nestable_list_menu').on('click', function (e: any): any
        {
            let target = $(e.target);
            let action = target.data('action');

            if (action === 'expand-all')
            {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all')
            {
                $('.dd').nestable('collapseAll');
            }
        });

        $('#nestable_list_3').nestable();
    }

    public updateOutput(e: any): any
    {
        let list = e.length ? e : $(e.target);
        let output = list.data('output');

        if (JSON)
        {
            output.val(JSON.stringify(list.nestable('serialize')));
        }
        else
        {
            output.val('JSON browser support required for this demo.');
        }
    };
}


// Tables-DataTables
// =================================================================
// DATA TABLES
// =================================================================
// Require Data Tables
// http://www.datatables.net/
// =================================================================

import { Injectable } from '@angular/core';
import { SenseuiService } from '../../../shared/senseui.service';

@Injectable()
export class DatatableService
{
    private senseui: SenseuiService;
    public constructor(senseui: SenseuiService)
    {
        this.senseui = senseui;
    }

    public initDatatable(): any
    {
        let _this = this;

        $.fn.DataTable.ext.pager.numbers_length = 5;

        // Basic Data Tables with responsive plugin
        // -----------------------------------------------------------------
        $('#demo-dt-basic').dataTable({
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="fa fa-angle-left"></i>',
                    next: '<i class="fa fa-angle-right"></i>'
                }
            }
        });

        // Row selection (single row)
        // -----------------------------------------------------------------
        let rowSelection = $('#demo-dt-selection').DataTable({
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="fa fa-angle-left"></i>',
                    next: '<i class="fa fa-angle-right"></i>'
                }
            }
        });

        $('#demo-dt-selection').on('click', 'tr', function (): any
        {
            if ($(this).hasClass('selected'))
            {
                $(this).removeClass('selected');
            }
            else
            {
                rowSelection.$('tr.selected').removeClass('selected');
                $(this).addClass('selected');
            }
        });

        // Row selection and deletion (multiple rows)
        // -----------------------------------------------------------------
        let rowDeletion = $('#demo-dt-delete').DataTable({
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="fa fa-angle-left"></i>',
                    next: '<i class="fa fa-angle-right"></i>'
                }
            },
            dom: '<"toolbar">frtip'
        });
        $('#demo-custom-toolbar').appendTo($('div.toolbar'));

        $('#demo-dt-delete tbody').on('click', 'tr', function (): any
        {
            $(this).toggleClass('selected');
        });

        $('#demo-dt-delete-btn').click(function (): any
        {
            rowDeletion.row('.selected').remove().draw(false);
        });

        // Add Row
        // -----------------------------------------------------------------
        let t = $('#demo-dt-addrow').DataTable({
            responsive: true,
            language: {
                paginate: {
                    previous: '<i class="fa fa-angle-left"></i>',
                    next: '<i class="fa fa-angle-right"></i>'
                }
            },
            dom: '<"newtoolbar">frtip'
        });
        $('#demo-custom-toolbar2').appendTo($('div.newtoolbar'));

        $('#demo-dt-addrow-btn').on('click', function (): any
        {
            t.row.add([
                'Albert Johnson',
                'New Row',
                'New Row',
                _this.senseui.randomInt(1, 100),
                '2015/10/15',
                '$' + _this.senseui.randomInt(1, 100) + ',000'
            ]).draw();
        });
    }
}

// Tables-FooTable
// =================================================================
// FOO TABLES
// =================================================================
// Require FooTable
// http://fooplugins.com/footable-demos/
// =================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class FootableService
{
    public initFootable(): any
    {
        // Row Toggler
        // -----------------------------------------------------------------
        $('#demo-foo-row-toggler').footable();

        // Expand / Collapse All Rows
        // -----------------------------------------------------------------
        let fooColExp = $('#demo-foo-col-exp');
        fooColExp.footable().trigger('footable_collapse_all');

        $('#demo-foo-collapse').on('click', function (): any
        {
            fooColExp.trigger('footable_collapse_all');
        });
        $('#demo-foo-expand').on('click', function (): any
        {
            fooColExp.trigger('footable_expand_all');
        });

        // Accordion
        // -----------------------------------------------------------------
        $('#demo-foo-accordion').footable().on('footable_row_expanded', function (e: any): any
        {
            $('#demo-foo-accordion tbody tr.footable-detail-show').not(e.row).each(function (): any
            {
                $('#demo-foo-accordion').data('footable').toggleDetail(this);
            });
        });

        // Pagination
        // -----------------------------------------------------------------
        $('#demo-foo-pagination').footable();
        $('#demo-show-entries').change(function (e: any): any
        {
            e.preventDefault();
            let pageSize = $(this).val();
            $('#demo-foo-pagination').data('page-size', pageSize);
            $('#demo-foo-pagination').trigger('footable_initialized');
        });

        // Filtering
        // -----------------------------------------------------------------
        let filtering = $('#demo-foo-filtering');
        filtering.footable().on('footable_filtering', function (e: any): any
        {
            let selected = $('#demo-foo-filter-status').find(':selected').val();
            e.filter += (e.filter && e.filter.length > 0) ? ' ' + selected : selected;
            e.clear = !e.filter;
        });

        // Filter status
        $('#demo-foo-filter-status').change(function (e: any): any
        {
            e.preventDefault();
            filtering.trigger('footable_filter', { filter: $(this).val() });
        });

        // Search input
        $('#demo-foo-search').on('input', function (e: any): any
        {
            e.preventDefault();
            filtering.trigger('footable_filter', { filter: $(this).val() });
        });

        // Add & Remove Row
        // -----------------------------------------------------------------
        let addrow = $('#demo-foo-addrow');
        addrow.footable().on('click', '.demo-delete-row', function (): any
        {
            // get the footable object
            let footable = addrow.data('footable');

            // get the row we are wanting to delete
            let row = $(this).parents('tr:first');

            // delete the row
            footable.removeRow(row);
        });

        // Search input
        $('#demo-input-search2').on('input', function (e: any): any
        {
            e.preventDefault();
            addrow.trigger('footable_filter', { filter: $(this).val() });
        });

        // Add Row Button
        $('#demo-btn-addrow').click(function (): any
        {
            // get the footable object
            let footable = addrow.data('footable');

            // build up the row we are wanting to add
            let newRow = `
                <tr>
                    <td>Adam</td>
                    <td>Doe</td>
                    <td>Traffic Court Referee</td>
                    <td>22 Jun 1972</td>
                    <td><span class="label label-table label-success">Active</span></td>
                    <td><button class="btn btn-danger fa fa-trash"></button></td>
                </tr>`;

            // add it
            footable.appendRow(newRow);
        });
    }
}

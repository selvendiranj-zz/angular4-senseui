// Ecommerce-orderview
// ====================================================================
import { Injectable } from '@angular/core';

@Injectable()
export class OrderviewService
{
    public InitOrderview(): any
    {
        // FOO TABLES
        // =================================================================
        // Require FooTable
        // -----------------------------------------------------------------
        // http://fooplugins.com/footable-demos/
        // =================================================================

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
    }
}

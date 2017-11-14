// Typings reference file, you can add your own global typings here
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html

declare const System: any;
declare const ENV: string;

// google code-prettify
declare const PR: any;

// declare const require:any;
// declare const global:any;
declare const moment: any;
declare const Morris: any;
declare const Dropzone: any;
declare const noUiSlider: any;
declare const Switchery: any;
declare const GMaps: any;
declare const Skycons: any;
declare const screenfull: any;
declare const Gamma: any;

declare module jasmine
{
    interface Matchers<T>
    {
        toHaveCssClass(expected: any): boolean;
    }
}

interface HTMLElement
{
    value: any;
    files: any;

}
interface JQuery
{
    plot: any;
    draggable: any;
    fullCalendar: any;
    vectorMap: any;
    easyPieChart: any;
    sortable: any;
    disableSelection: any;
    footable: any;
    dataTable: any;
    live: any;
    editableTableWidget: any;
    selectpicker: any;
    senseuiOverlay: any;
    chosen: any;
    ionRangeSlider: any;
    timepicker: any;
    datepicker: any;
    summernote: any;
    mask: any;
    tagit: any;
    bootstrapValidator: any;
    bootstrapWizard: any;
    steps: any;
    parsley: any;
    slimscroll: any;
    DataTable: any;
    nestable: any;
    editable: any;
    tooltip: any;
    popover: any;
    nanoScroller: any;
    senseuiCheck: any;
    senseuiLanguage: any;
    senseuiAffix: any;
    affix: any;
    isOnScreen: any;
    metisMenu: any;
}

interface JQueryStatic
{
    plot: any;
    senseuiNav: any;
    senseuiNoty: any;
    senseuiAside: any;

}

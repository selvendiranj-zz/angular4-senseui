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

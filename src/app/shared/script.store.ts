interface Scripts
{
    name: string;
    src: string;
}

interface CompScripts
{
    name: string;
    scripts: string[];
}

export const ScriptStore: Scripts[] = [
    { name: 'senui-scripts', src: '../scripts/scripts.js' },
    { name: 'senui-index', src: '../scripts/demo/index.js' },
    { name: 'senui-wizard', src: '../scripts/demo/wizard.js' },
    { name: 'senui-form-wizard', src: '../scripts/demo/form-wizard.js' },
    { name: 'senui-calendar', src: '../scripts/demo/fullcalendar.js' }
];

export const CompScriptsStore: CompScripts[] = [
    { name: 'AppComponent', scripts: ['senui-scripts'] },
    { name: 'Version1Component', scripts: ['senui-index', 'senui-wizard', 'senui-form-wizard'] },
    { name: 'CalendarComponent', scripts: ['senui-calendar'] }
];

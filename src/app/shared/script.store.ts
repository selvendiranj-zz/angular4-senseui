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
    { name: 'senseui-scripts', src: '../scripts/scripts.js' },
    { name: 'senseui-index', src: '../scripts/demo/index.js' },
    { name: 'senseui-wizard', src: '../scripts/demo/wizard.js' },
    { name: 'senseui-form-wizard', src: '../scripts/demo/form-wizard.js' },
    { name: 'senseui-calendar', src: '../scripts/demo/fullcalendar.js' }
];

export const CompScriptsStore: CompScripts[] = [
    { name: 'AppComponent', scripts: ['senseui-scripts'] },
    { name: 'Version1Component', scripts: ['senseui-index', 'senseui-wizard', 'senseui-form-wizard'] },
    { name: 'CalendarComponent', scripts: ['senseui-calendar'] }
];

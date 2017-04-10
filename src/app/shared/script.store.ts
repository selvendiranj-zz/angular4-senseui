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
    { name: 'senui-calendar', src: '../scripts/demo/fullcalendar.js' },
    { name: 'moment', src: 'assets/bower_components/moment/min/moment.min.js' },
    { name: 'jquery-ui', src: 'assets/bower_components/jquery-ui/jquery-ui.min.js' },
    { name: 'fullcalendar', src: 'assets/bower_components/fullcalendar/dist/fullcalendar.min.js' }
];

export const CompScriptsStore: CompScripts[] = [
    { name: 'AppComponent', scripts: ['senui-scripts'] },
    { name: 'Version1Component', scripts: ['senui-index', 'senui-wizard', 'senui-form-wizard'] },
    { name: 'CalendarComponent', scripts: ['moment', 'jquery-ui', 'fullcalendar', 'senui-calendar'] }
];

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
    { name: 'senseui-googlemaps', src: 'https://maps.googleapis.com/maps/api/js?v=3' },
    { name: 'senseui-gmaps', src: 'assets/bower_components/gmaps/gmaps.js' }
];

export const CompScriptsStore: CompScripts[] = [
    { name: 'AppComponent', scripts: ['senseui-scripts', 'senseui-googlemaps', 'senseui-gmaps'] }
];

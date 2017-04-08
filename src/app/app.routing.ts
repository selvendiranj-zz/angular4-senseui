import { Version1Component } from './components/dashboard/version1.component';

export const routes = [
    { path: '', data: ['Dashboard'], component: Version1Component },
    { path: 'calendar', data: ['Calendar'], loadChildren: './components/calendar/calendar.module#CalendarModule' },
    { path: '**', redirectTo: '/' }
];

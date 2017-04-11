export const routes = [
    { path: '', data: ['Dashboard'], loadChildren: './components/dashboard/home1/home1.module#Home1Module' },
    { path: 'dashboard/home2', data: ['Dashboard'], loadChildren: './components/dashboard/home2/home2.module#Home2Module' },
    { path: 'calendar', data: ['Calendar'], loadChildren: './components/calendar/calendar.module#CalendarModule' },
    { path: '**', redirectTo: '/' }
];

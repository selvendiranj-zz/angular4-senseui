export const routes = [
    { path: '', data: ['Dashboard'], loadChildren: './components/dashboard/home1/home1.module#Home1Module' },
    { path: 'dashboard/home2', data: ['Dashboard2'], loadChildren: './components/dashboard/home2/home2.module#Home2Module' },
    { path: 'dashboard/home3', data: ['Dashboard3'], loadChildren: './components/dashboard/home3/home3.module#Home3Module' },
    { path: 'calendar', data: ['Calendar'], loadChildren: './components/calendar/calendar.module#CalendarModule' },
    { path: '**', redirectTo: '/' }
];

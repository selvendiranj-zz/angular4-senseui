import { Version1Component } from './components/dashboard/version1.component';

export const routes = [
    { path: '', data: ['Dashboard'], component: Version1Component },
    // { path: 'dashboard', data: ['Dashboard'], loadChildren: './components/dashboard/dashboard.module#DashboardModule' },
    { path: '**', redirectTo: '/' }
];

import { GettingStartedComponent } from './getting-started/getting-started.component';

export const routes = [
    { path: '', data: ['Getting started'], component: GettingStartedComponent },
    {
        path: 'dashboard', data: ['Dashboard'],
        // component: TypeaheadSectionComponent
        loadChildren: './components/dashboard/dashboard.module#dashboardModule'
    },
    { path: '**', redirectTo: '/' }
];

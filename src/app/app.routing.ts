export const routes = [
    { path: '', data: ['Dashboard'], loadChildren: './components/dashboard/home1/home1.module#Home1Module' },
    { path: 'dashboard/home2', data: ['Dashboard2'], loadChildren: './components/dashboard/home2/home2.module#Home2Module' },
    { path: 'dashboard/home3', data: ['Dashboard3'], loadChildren: './components/dashboard/home3/home3.module#Home3Module' },
    { path: 'charts/flot', data: ['Flot'], loadChildren: './components/charts/flot/flot.module#FlotModule' },
    { path: 'charts/morris', data: ['Morris'], loadChildren: './components/charts/morris/morris.module#MorrisModule' },
    { path: 'forms/components', data: ['Components'], loadChildren: './components/forms/controls/controls.module#ControlsModule' },
    { path: 'forms/layout', data: ['Layout'], loadChildren: './components/forms/layout/layout.module#LayoutModule' },
    { path: 'forms/switchery', data: ['Switchery'], loadChildren: './components/forms/switchery/switchery.module#SwitcheryModule' },
    { path: 'forms/validation', data: ['Validation'], loadChildren: './components/forms/validation/validation.module#ValidationModule' },
    { path: 'forms/wizard', data: ['Wizard'], loadChildren: './components/forms/wizard/wizard.module#WizardModule' },
    { path: 'ecommerce/dashboard', data: ['Ecommerce'], loadChildren: './components/ecommerce/dashboard/ecommerce.module#EcommerceModule' },
    { path: 'ecommerce/order', data: ['Order'], loadChildren: './components/ecommerce/order/order.module#OrderModule' },
    { path: 'ecommerce/orderview', data: ['OrderView'], loadChildren: './components/ecommerce/orderview/orderview.module#OrderviewModule' },
    { path: 'ecommerce/products', data: ['Products'], loadChildren: './components/ecommerce/products/products.module#ProductsModule' },
    { path: 'calendar', data: ['Calendar'], loadChildren: './components/calendar/calendar.module#CalendarModule' },
    { path: '**', redirectTo: '/' }
];

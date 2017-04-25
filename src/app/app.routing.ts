export const routes = [
    { path: '', data: ['Dashboard'], loadChildren: './components/dashboard/home1/home1.module#Home1Module' },
    { path: 'dashboard/home2', data: ['Dashboard2'], loadChildren: './components/dashboard/home2/home2.module#Home2Module' },
    { path: 'dashboard/home3', data: ['Dashboard3'], loadChildren: './components/dashboard/home3/home3.module#Home3Module' },

    { path: 'charts/flot', data: ['Flot'], loadChildren: './components/charts/flot/flot.module#FlotModule' },
    { path: 'charts/morris', data: ['Morris'], loadChildren: './components/charts/morris/morris.module#MorrisModule' },

    { path: 'ecommerce/dashboard', data: ['Ecommerce'], loadChildren: './components/ecommerce/dashboard/ecommerce.module#EcommerceModule' },
    { path: 'ecommerce/order', data: ['Order'], loadChildren: './components/ecommerce/order/order.module#OrderModule' },
    { path: 'ecommerce/orderview', data: ['OrderView'], loadChildren: './components/ecommerce/orderview/orderview.module#OrderviewModule' },
    { path: 'ecommerce/products', data: ['Products'], loadChildren: './components/ecommerce/products/products.module#ProductsModule' },

    { path: 'forms/components', data: ['Components'], loadChildren: './components/forms/controls/controls.module#ControlsModule' },
    { path: 'forms/layout', data: ['Layout'], loadChildren: './components/forms/layout/layout.module#LayoutModule' },
    { path: 'forms/switchery', data: ['Switchery'], loadChildren: './components/forms/switchery/switchery.module#SwitcheryModule' },
    { path: 'forms/validation', data: ['Validation'], loadChildren: './components/forms/validation/validation.module#ValidationModule' },
    { path: 'forms/wizard', data: ['Wizard'], loadChildren: './components/forms/wizard/wizard.module#WizardModule' },

    { path: 'layouts/appv2', data: ['AppV2'], loadChildren: './components/layouts/appv2/appv2.module#AppV2Module' },
    { path: 'layouts/horzmenu', data: ['HorzMenu'], loadChildren: './components/layouts/horzmenu/horzmenu.module#HorzMenuModule' },
    { path: 'layouts/blank', data: ['Blank'], loadChildren: './components/layouts/blank/blank.module#BlankModule' },

    { path: 'mail/compose', data: ['Compose'], loadChildren: './components/mail/compose/compose.module#ComposeModule' },
    { path: 'mail/inbox', data: ['Inbox'], loadChildren: './components/mail/inbox/inbox.module#InboxModule' },
    { path: 'mail/mailview', data: ['Mailview'], loadChildren: './components/mail/mailview/mailview.module#MailviewModule' },

    { path: 'maps/gmap', data: ['GMap'], loadChildren: './components/maps/gmap/gmap.module#GMapModule' },
    { path: 'maps/vectormap', data: ['VectorMap'], loadChildren: './components/maps/vectormap/vectormap.module#VectormapModule' },

    { path: 'tables/datatable', data: ['Datatable'], loadChildren: './components/tables/datatable/datatable.module#DatatableModule' },
    { path: 'tables/footable', data: ['Footable'], loadChildren: './components/tables/footable/footable.module#FootableModule' },
    { path: 'tables/static', data: ['static'], loadChildren: './components/tables/static/staticTable.module#StaticTableModule' },

    { path: 'ui/accordion', data: ['accordion'], loadChildren: './components/ui/accordion/accordion.module#AccordionModule' },
    { path: 'ui/animation', data: ['animation'], loadChildren: './components/ui/animation/animation.module#AnimationModule' },
    { path: 'ui/button', data: ['button'], loadChildren: './components/ui/button/button.module#ButtonModule' },
    { path: 'ui/components', data: ['components'], loadChildren: './components/ui/components/components.module#ComponentsModule' },
    { path: 'ui/dragdrop', data: ['dragdrop'], loadChildren: './components/ui/dragdrop/dragdrop.module#DragdropModule' },
    { path: 'ui/fontawesome', data: ['fontawesome'], loadChildren: './components/ui/fontawesome/fontawesome.module#FontawesomeModule' },
    { path: 'ui/grids', data: ['grids'], loadChildren: './components/ui/grids/grids.module#GridsModule' },
    { path: 'ui/icons', data: ['icons'], loadChildren: './components/ui/icons/icons.module#IconsModule' },
    { path: 'ui/nestedlist', data: ['nestedlist'], loadChildren: './components/ui/nestedlist/nestedlist.module#NestedListModule' },
    { path: 'ui/panel', data: ['panel'], loadChildren: './components/ui/panel/panel.module#PanelModule' },
    { path: 'ui/tab', data: ['tab'], loadChildren: './components/ui/tab/tab.module#TabModule' },
    { path: 'ui/timeline', data: ['timeline'], loadChildren: './components/ui/timeline/timeline.module#TimelineModule' },
    { path: 'ui/typography', data: ['typography'], loadChildren: './components/ui/typography/typography.module#TypographyModule' },
    { path: 'ui/widgets', data: ['Widgets'], loadChildren: './components/ui/widgets/widgets.module#WidgetsModule' },
    { path: 'ui/xeditable', data: ['xeditable'], loadChildren: './components/ui/xeditable/xeditable.module#XeditableModule' },

    { path: 'calendar', data: ['Calendar'], loadChildren: './components/calendar/calendar.module#CalendarModule' },

    { path: '**', redirectTo: '/' }
];


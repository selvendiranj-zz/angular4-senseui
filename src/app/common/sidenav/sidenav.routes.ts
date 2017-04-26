interface Sidenav
{
    name: string;
    icon: string;
    url: string;
    isCategory: boolean;
    children: Sidenav[];
}

const dashboard: Sidenav[] = [
    { name: 'Homepage V1', icon: 'fa fa-caret-right', url: '/', isCategory: false, children: [] },
    { name: 'Homepage V2', icon: 'fa fa-caret-right', url: '/dashboard/home2', isCategory: false, children: [] },
    { name: 'Homepage V3', icon: 'fa fa-caret-right', url: '/dashboard/home3', isCategory: false, children: [] }
];

const ecommerce: Sidenav[] = [
    { name: 'Dashboard', icon: 'fa fa-caret-right', url: '/ecommerce/dashboard', isCategory: false, children: [] },
    { name: 'Order', icon: 'fa fa-caret-right', url: '/ecommerce/order', isCategory: false, children: [] },
    { name: 'Orders View', icon: 'fa fa-caret-right', url: '/ecommerce/orderview', isCategory: false, children: [] },
    { name: 'Product List', icon: 'fa fa-caret-right', url: '/ecommerce/products', isCategory: false, children: [] }
];

const layouts: Sidenav[] = [
    { name: 'Blank Page', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] },
    { name: 'Boxed Version', icon: 'fa fa-caret-right', url: '/layouts/boxed', isCategory: false, children: [] },
    { name: 'Collapsed Sidebar', icon: 'fa fa-caret-right', url: '/layouts/sidebar', isCategory: false, children: [] },
    { name: 'Push Menu', icon: 'fa fa-caret-right', url: '/layouts/pushmenu', isCategory: false, children: [] },
    { name: 'Slide Menu', icon: 'fa fa-caret-right', url: '/layouts/slidemenu', isCategory: false, children: [] },
    { name: 'Horizontal Menu', icon: 'fa fa-caret-right', url: '/layouts/horzmenu', isCategory: false, children: [] },
    { name: 'Boxed Horizontal', icon: 'fa fa-caret-right', url: '/layouts/horzboxed', isCategory: false, children: [] },
    { name: 'Apps layout V1', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] },
    { name: 'Apps layout V2', icon: 'fa fa-caret-right', url: '/layouts/appv2', isCategory: false, children: [] },
    { name: 'Full Width', icon: 'fa fa-caret-right', url: '/layouts/blank', isCategory: false, children: [] }
];

const uielements: Sidenav[] = [
    { name: 'Accordions', icon: 'fa fa-caret-right', url: '/ui/accordion', isCategory: false, children: [] },
    { name: 'CSS3 Animation', icon: 'fa fa-caret-right', url: '/ui/animation', isCategory: false, children: [] },
    { name: 'Buttons', icon: 'fa fa-caret-right', url: '/ui/button', isCategory: false, children: [] },
    { name: 'Components', icon: 'fa fa-caret-right', url: '/ui/components', isCategory: false, children: [] },
    { name: 'Draggable Panel', icon: 'fa fa-caret-right', url: '/ui/dragdrop', isCategory: false, children: [] },
    { name: 'Fontawesome', icon: 'fa fa-caret-right', url: '/ui/fontawesome', isCategory: false, children: [] },
    { name: 'Grids', icon: 'fa fa-caret-right', url: '/ui/grids', isCategory: false, children: [] },
    { name: 'Icons', icon: 'fa fa-caret-right', url: '/ui/icons', isCategory: false, children: [] },
    { name: 'Nested List', icon: 'fa fa-caret-right', url: '/ui/nestedlist', isCategory: false, children: [] },
    { name: 'Panel', icon: 'fa fa-caret-right', url: '/ui/panel', isCategory: false, children: [] },
    { name: 'Tab', icon: 'fa fa-caret-right', url: '/ui/tab', isCategory: false, children: [] },
    { name: 'Timeline', icon: 'fa fa-caret-right', url: '/ui/timeline', isCategory: false, children: [] },
    { name: 'Typography', icon: 'fa fa-caret-right', url: '/ui/typography', isCategory: false, children: [] },
    { name: 'Widgets', icon: 'fa fa-caret-right', url: '/ui/widgets', isCategory: false, children: [] },
    { name: 'Xeditable', icon: 'fa fa-caret-right', url: '/ui/xeditable', isCategory: false, children: [] }
];

const pages: Sidenav[] = [
    { name: 'Directory', icon: 'fa fa-caret-right', url: '/pages/directory', isCategory: false, children: [] },
    { name: '404 Error', icon: 'fa fa-caret-right', url: '/pages/error404', isCategory: false, children: [] },
    { name: '500 Error', icon: 'fa fa-caret-right', url: '/pages/error500', isCategory: false, children: [] },
    { name: 'FAQ', icon: 'fa fa-caret-right', url: '/pages/faq', isCategory: false, children: [] },
    { name: 'Gallery', icon: 'fa fa-caret-right', url: '/pages/gallery', isCategory: false, children: [] },
    { name: 'Invoice', icon: 'fa fa-caret-right', url: '/pages/invoice', isCategory: false, children: [] },
    { name: 'Lock Screen', icon: 'fa fa-caret-right', url: '/pages/lockscreen', isCategory: false, children: [] },
    { name: 'Login', icon: 'fa fa-caret-right', url: '/pages/login', isCategory: false, children: [] },
    { name: 'User Profile', icon: 'fa fa-caret-right', url: '/pages/profile', isCategory: false, children: [] },
    { name: 'Password Reminder', icon: 'fa fa-caret-right', url: '/pages/pwdreminder', isCategory: false, children: [] },
    { name: 'Register', icon: 'fa fa-caret-right', url: '/pages/register', isCategory: false, children: [] }
];

const tables: Sidenav[] = [
    { name: 'Static Table', icon: 'fa fa-caret-right', url: '/tables/static', isCategory: false, children: [] },
    { name: 'Datatable Table', icon: 'fa fa-caret-right', url: '/tables/datatable', isCategory: false, children: [] },
    { name: 'Footable Table', icon: 'fa fa-caret-right', url: '/tables/footable', isCategory: false, children: [] }
];

const forms: Sidenav[] = [
    { name: 'Form Layout', icon: 'fa fa-caret-right', url: '/forms/layout', isCategory: false, children: [] },
    { name: 'Form Switchery', icon: 'fa fa-caret-right', url: '/forms/switchery', isCategory: false, children: [] },
    { name: 'Form Components', icon: 'fa fa-caret-right', url: '/forms/components', isCategory: false, children: [] },
    { name: 'Form Validation', icon: 'fa fa-caret-right', url: '/forms/validation', isCategory: false, children: [] },
    { name: 'Form Wizard', icon: 'fa fa-caret-right', url: '/forms/wizard', isCategory: false, children: [] }
];

const charts: Sidenav[] = [
    { name: 'Flot Chart', icon: 'fa fa-caret-right', url: '/charts/flot', isCategory: false, children: [] },
    { name: 'Morris Chart', icon: 'fa fa-caret-right', url: '/charts/morris', isCategory: false, children: [] }
];

const mail: Sidenav[] = [
    { name: 'Inbox', icon: 'fa fa-caret-right', url: '/mail/inbox', isCategory: false, children: [] },
    { name: 'Compose', icon: 'fa fa-caret-right', url: '/mail/compose', isCategory: false, children: [] },
    { name: 'Mail View', icon: 'fa fa-caret-right', url: '/mail/mailview', isCategory: false, children: [] }
];

const maps: Sidenav[] = [
    { name: 'Google Maps', icon: 'fa fa-caret-right', url: '/maps/gmap', isCategory: false, children: [] },
    { name: 'Vector Maps', icon: 'fa fa-caret-right', url: '/maps/vectormap', isCategory: false, children: [] }
];

export const routes: Sidenav[] = [
    { name: 'Navigation', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Dashboard', icon: 'fa fa-home', url: '', isCategory: false, children: dashboard },
    { name: 'E-commerce', icon: 'fa fa-shopping-cart', url: '', isCategory: false, children: ecommerce },
    { name: '', icon: 'list-divider', url: '', isCategory: true, children: [] },
    { name: 'Components', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Layouts', icon: 'fa fa-th', url: '', isCategory: false, children: layouts },
    { name: 'UI Elements', icon: 'fa fa-briefcase', url: '', isCategory: false, children: uielements },
    { name: 'Pages', icon: 'fa fa-file', url: '', isCategory: false, children: pages },
    { name: 'Tables', icon: 'fa fa-table', url: '', isCategory: false, children: tables },
    { name: 'Forms', icon: 'fa fa-edit', url: '', isCategory: false, children: forms },
    { name: 'Charts', icon: 'fa fa-line-chart', url: '', isCategory: false, children: charts },
    { name: '', icon: 'list-divider', url: '', isCategory: true, children: [] },
    { name: 'EXTRA', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Calendar', icon: 'fa fa-calendar', url: '/calendar', isCategory: false, children: [] },
    { name: 'Widgets', icon: 'fa fa-flask', url: '/ui/widgets', isCategory: false, children: [] },
    { name: 'Mail', icon: 'fa fa-envelope-o', url: '', isCategory: false, children: mail },
    { name: 'Maps', icon: 'fa fa-map-marker', url: '', isCategory: false, children: maps }
];

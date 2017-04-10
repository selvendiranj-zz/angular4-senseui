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
    { name: 'Homepage V2', icon: 'fa fa-caret-right', url: '/dashboard/homev2', isCategory: false, children: [] },
    { name: 'Homepage V3', icon: 'fa fa-caret-right', url: '/dashboard/homev3', isCategory: false, children: [] }
];

const ecommerce: Sidenav[] = [
    { name: 'Dashboard', icon: 'fa fa-caret-right', url: '/ecommerce/dashboard', isCategory: false, children: [] },
    { name: 'Order', icon: 'fa fa-caret-right', url: '/ecommerce/order', isCategory: false, children: [] },
    { name: 'Orders View', icon: 'fa fa-caret-right', url: '/ecommerce/ordersview', isCategory: false, children: [] },
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

export const routes: Sidenav[] = [
    { name: 'Navigation', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Dashboard', icon: 'fa fa-home', url: '', isCategory: false, children: dashboard },
    { name: 'E-commerce', icon: 'fa fa-shopping-cart', url: '', isCategory: false, children: ecommerce },
    { name: '', icon: 'list-divider', url: '', isCategory: true, children: [] },
    { name: 'Components', icon: 'list-header', url: '', isCategory: true, children: [] },
    { name: 'Layouts', icon: 'fa fa-th', url: '', isCategory: false, children: layouts }
];

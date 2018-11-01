import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/page/HelloWorld';
import About from '@/components/page/About';
import UsingModal from '@/components/page/UsingModal';
import UsingCoupon from '@/components/page/UsingCoupon';
import UsingTab from '@/components/page/UsingTab';
import AddUser from '@/components/page/AddUser';
import ListTask from '@/components/page/ListTask';
import ChangeAttribute from '@/components/page/ChangeAttribute';
import Product from '@/components/page/product/Product';
import BulmaForm from '@/components/page/bulma/BulmaForm';
import BulmaSandbox from '@/components/page/bulma/BulmaSandbox';
import FirstRoute from '@/components/page/FirstRoute';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/using-modal',
            name: 'UsingModal',
            component: UsingModal
        },
        {
            path: '/using-coupon',
            name: 'UsingCoupon',
            component: UsingCoupon
        },
        {
            path: '/using-tab',
            name: 'UsingTab',
            component: UsingTab
        },
        {
            path: '/bulma-form',
            name: 'BulmaForm',
            component: BulmaForm
        },
        {
            path: '/bulma-sandbox',
            name: 'BulmaSandbox',
            component: BulmaSandbox
        },
        {
            path: '/add-user',
            name: 'AddUser',
            component: AddUser
        },
        {
            path: '/list-task',
            name: 'ListTask',
            component: ListTask
        },
        {
            path: '/change-attribute',
            name: 'ChangeAttribute',
            component: ChangeAttribute
        },
        {
            path: '/product',
            name: 'Product',
            component: Product
        },
        {
            path: '/firstroute/:name',
            name: 'FirstRoute',
            component: FirstRoute
        }
    ]
})

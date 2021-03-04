const { Module } = Shopware;

import './page/sg-prod-flow-index';
import './page/sg-prod-flow-detail';
import './page/sg-prod-flow-create';

Module.register('sg-prod-flow', {
    type: 'plugin',
    name: 'flow',
    title: 'Flow',
    description: 'Manage Product configuration flows',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-prod-flow-index',
            path: 'index'
        },
        detail: {
            component: 'sg-prod-flow-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sg-prod-flow-index'
            }
        },
        create: {
            component: 'sg-prod-flow-create',
            path: 'create',
            meta: {
                parentPath: 'sg-prod-flow-index'
            }
        }

    },

    navigation: [{
        id: 'sg-prod-flow',
        label: 'Product Flow',
        color: '#009bd9',
        path: 'sg.prod.flow.index',
        parent: 'sw-catalogue',
        position: 100
    }]

});

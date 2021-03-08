const { Module } = Shopware;

import './page/sg-prod-step-type-index';
//import './page/sg-prod-step-type-detail';
//import './page/sg-prod-step-type-create';

Module.register('sg-prod-step-type', {
    type: 'plugin',
    name: 'Step Type',
    title: 'Step Type',
    description: 'Manage Step Types',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-prod-step-type-index',
            path: 'index'
        },
        // detail: {
        //     component: 'sg-prod-step-type-detail',
        //     path: 'detail/:id',
        //     meta: {
        //         parentPath: 'sg-prod-step-type-index'
        //     }
        // },
        // create: {
        //     component: 'sg-prod-step-type-create',
        //     path: 'create',
        //     meta: {
        //         parentPath: 'sg-prod-step-type-index'
        //     }
        // }
    },

    navigation: [{
        id: 'sg-prod-step-type',
        label: 'Prod Step Type',
        color: '#009bd9',
        path: 'sg.prod.step.type.index',
        parent: 'sw-catalogue',
        position: 120
    }]
});

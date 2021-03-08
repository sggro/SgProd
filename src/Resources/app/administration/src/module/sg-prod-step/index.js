const { Module } = Shopware;

import './page/sg-prod-step-index';
// import './page/sg-prod-step-detail';
// import './page/sg-prod-step-create';

Module.register('sg-prod-step', {
    type: 'plugin',
    name: 'Step',
    title: 'Step',
    description: 'Manage Steps',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-prod-step-index',
            path: 'index'
        },
        // detail: {
        //     component: 'sg-prod-step-detail',
        //     path: 'detail/:id',
        //     meta: {
        //         parentPath: 'sg-prod-step-index'
        //     }
        // },
        // create: {
        //     component: 'sg-prod-step-create',
        //     path: 'create',
        //     meta: {
        //         parentPath: 'sg-prod-step-index'
        //     }
        // }
    },

    navigation: [{
        id: 'sg-prod-step',
        label: 'Prod Step',
        color: '#009bd9',
        path: 'sg.prod.step.index',
        parent: 'sw-catalogue',
        position: 130
    }]
});

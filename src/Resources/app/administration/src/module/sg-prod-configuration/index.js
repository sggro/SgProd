const { Module } = Shopware;

import './page/sg-prod-configuration-index';
import './page/sg-prod-configuration-detail';
import './page/sg-prod-configuration-create';
import './extension/sw-product';
import './extension/sw-product-tab-prod-configuration';

Module.register('sg-prod-configuration', {
    type: 'plugin',
    name: 'Configuration',
    title: 'Configuration',
    description: 'Manage Product configurations',
    color: '#009bd9',

    routes: {
        index: {
            component: 'sg-prod-configuration-index',
            path: 'index'
        },
        detail: {
            component: 'sg-prod-configuration-detail',
            path: 'detail/:id',
            meta: {
                parentPath: 'sg-prod-configuration-index'
            }
        },
        create: {
            component: 'sg-prod-configuration-create',
            path: 'create',
            meta: {
                parentPath: 'sg-prod-configuration-index'
            }
        }

    },

    navigation: [{
        id: 'sg-prod-configuration',
        label: 'Product Configuration',
        color: '#009bd9',
        path: 'sg.prod.configuration.index',
        parent: 'sw-catalogue',
        position: 110
    }],

    routeMiddleware(next, currentRoute){
        if (currentRoute.name === 'sw.product.detail') {
            currentRoute.children.push({
                name: 'sw.product.detail.prodConfiguration',
                path: '/sw/product/detail/:id/prodConfiguration',
                component: 'sw-product-detail-prod-configuration',
                meta: {
                    parentPath: "sw.product.index"
                }
            });
        }
        next(currentRoute);
    }


});


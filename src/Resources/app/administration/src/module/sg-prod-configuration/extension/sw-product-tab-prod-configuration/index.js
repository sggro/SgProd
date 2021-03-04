import template from './sw-product-tab-prod-configuration.html.twig';

const { mapGetters, mapState } = Shopware.Component.getComponentHelper();
const { Component } = Shopware;

Component.register('sw-product-detail-prod-configuration',{
    template,

    metaInfo() {
        return {
            title: "Product Configuration"
        };
    },

    computed: {
        ...mapState('swProductDetail', [
            'product'
        ]),
    }
});

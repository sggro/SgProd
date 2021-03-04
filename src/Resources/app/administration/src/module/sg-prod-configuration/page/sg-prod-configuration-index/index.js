import template from './sg-prod-configuration-index.html.twig';

const { Component, Data, Context } = Shopware;
const { Criteria } = Data;

Component.register('sg-prod-configuration-index', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            configurations: null,
            repository: null
        }
    },

    created() {
        this.createdComponent();
    },

    computed: {
        columns() {
            return [{
                property: 'name',
                dataIndex: 'name',
                label: 'Name',
                routerLink: 'sg.prod.configuration.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            }, {
                property: 'createdAt',
                dataIndex: 'createdAt',
                label: 'Created At',
                allowResize: true
            }];
        }
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('sg_prod_configuration');

            this.repository
                .search(new Criteria(), Context.api)
                .then((result) => {
                    this.configurations = result;
                });

        },
    }
});

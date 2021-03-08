import template from './sg-prod-step-type-index.html.twig';

const { Component, Data, Context } = Shopware;
const { Criteria } = Data;

Component.register('sg-prod-step-type-index', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            stepTypes: null,
            repository: null
        }
    },

    created() {
        this.createdComponent();
    },

    computed: {
        columns() {
            return [{
                property: 'technicalName',
                dataIndex: 'technicalName',
                label: 'Technical Name',
               // routerLink: 'sg.prod.step.type.detail',
                inlineEdit: 'string',
                allowResize: true,
                primary: true
            },
                {
                property: 'label',
                dataIndex: 'label',
                label: 'Label',
                inlineEdit: 'string',
                allowResize: true
            },
                {
                    property: 'template',
                    dataIndex: 'template',
                    label: 'Template',
                    inlineEdit: 'string',
                    allowResize: true
                },
                {
                property: 'createdAt',
                dataIndex: 'createdAt',
                label: 'Created At',
                allowResize: true
            },
                {
                    property: 'updatedAt',
                    dataIndex: 'updatedAt',
                    label: 'Updated At',
                    allowResize: true
                }


            ];
        }
    },

    methods: {
        createdComponent() {
            this.repository = this.repositoryFactory.create('sg_prod_step_type');

            this.repository
                .search(new Criteria(), Context.api)
                .then((result) => {
                    this.stepTypes = result;
                });

        },
    }
});

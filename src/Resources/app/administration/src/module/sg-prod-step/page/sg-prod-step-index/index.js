import template from './sg-prod-step-index.html.twig';

const { Component, Data, Context } = Shopware;
const { Criteria } = Data;

Component.register('sg-prod-step-index', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            steps: null,
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
                //routerLink: 'sg.prod.step.type.detail',
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
                    property: 'description',
                    dataIndex: 'description',
                    label: 'Description',
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
            this.repository = this.repositoryFactory.create('sg_prod_step');

            this.repository
                .search(new Criteria(), Context.api)
                .then((result) => {
                    this.steps = result;
                });

        },
    }
});

import template from './sg-prod-step-type-detail.html.twig';

const { Component, Context } = Shopware;

Component.register('sg-prod-step-type-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            stepType: null,
        }
    },

    computed: {
        stepTypeRepository() {
            return this.repositoryFactory.create('sg_prod_step_type')
        }
    },

    created() {
        this.createdComponent();
    },

    methods: {

        createdComponent() {
            this.loadEntityData();
            },

        loadEntityData() {
            this.isLoading = true;
            this.stepTypeRepository.get(
                this.$route.params.id,
                Context.api
            ).then(entity=>{
                this.stepType = entity;
                this.isLoading = false;
            }).catch(exception =>{
                this.isLoading = false;
                console.log('exception', exception);
            });
        },

        saveFinish() {
            this.isSaveSuccessful = false;
        },

        onSave() {
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.stepTypeRepository()
                .save(this.stepType, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                })
                .catch((exception) => {
                    console.log('exception', exception);
                });
        }

    }
});

import template from './sg-prod-step-detail.html.twig';

const { Component, Context } = Shopware;

Component.register('sg-prod-step-detail', {
    template,

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            step: null,
        }
    },

    computed: {
        stepRepository() {
            return this.repositoryFactory.create('sg_prod_step')
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
            this.stepRepository.get(
                this.$route.params.id,
                Context.api
            ).then(entity=>{
                this.step = entity;
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

            return this.stepRepository()
                .save(this.step, Context.api )
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

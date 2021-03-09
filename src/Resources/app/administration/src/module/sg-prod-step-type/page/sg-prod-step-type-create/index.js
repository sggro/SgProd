const { Component, Context } = Shopware;

Component.extend('sg-prod-step-type-create', 'sg-prod-step-type-detail', {

    methods: {

        loadEntityData() {
            this.stepType = this.stepTypeRepository.create(Context.api);
        },

        onSave() {
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.stepTypeRepository
                .save(this.stepType, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    this.$router.push({ name: 'sg.prod.step.type.detail', params: { id: this.stepType.id } });
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        }
    }
});

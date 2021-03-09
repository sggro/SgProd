const { Component, Context } = Shopware;

Component.extend('sg-prod-step-create', 'sg-prod-step-detail', {

    methods: {

        loadEntityData() {
            this.step = this.stepRepository.create(Context.api);
        },

        onSave() {
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.stepRepository
                .save(this.step, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    this.$router.push({ name: 'sg.prod.step.detail', params: { id: this.step.id } });
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        }
    }
});

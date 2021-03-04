const { Component, Context } = Shopware;

Component.extend('sg-prod-flow-create', 'sg-prod-flow-detail', {

    methods: {

        loadEntityData() {
            this.flow = this.flowRepository.create(Context.api);
            console.log('flow', flow);
        },

        onSave() {
            console.log('save that Flow');
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.flowRepository
                .save(this.flow, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                    this.$router.push({ name: 'sg.prod.flow.detail', params: { id: this.flow.id } });
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        }
    }
});

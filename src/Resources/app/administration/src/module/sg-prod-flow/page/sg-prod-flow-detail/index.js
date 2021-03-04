import template from './sg-prod-flow-detail.html.twig';
//import FlowChart from 'flowchart-vue';
//import WorkflowChart from 'vue-workflow-chart';
//import Vue from 'vue';
//import FlowyPlugin from "@hipsjs/flowy-vue";
//import { Flowy } from '@hipsjs/flowy-vue';
import './sg-prod-flow-detail.scss';

const { Component, Context } = Shopware;

Component.register('sg-prod-flow-detail', {
    template,

    components: {
        // WorkflowChart
    },

    inject: [
        'repositoryFactory'
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
            flow: null,
            stepNodes: []
            // stepNodeRelations: [
            //     {
            //         sourceId: '1',
            //         targetId: '2'
            //     },
            //     {
            //         sourceId: '2',
            //         targetId: '3'
            //     },
            //     {
            //         sourceId: '3',
            //         targetId: '4'
            //     }
            // ]

            /*steps: [
                {
                'id': '1',
                'label': 'Step One',
                'nextId': '2'},
                {
                    'id': '2',
                    'label': 'Step Two',
                    'nextId': '3'},
                {
                    'id': '3',
                    'label': 'Step Three',
                    'nextId': '4'},
                {
                    'id': '4',
                    'label': 'Step Four'},
            ],
            selectedStep: null*/
        }
    },

    computed: {
      flowRepository() {
          return this.repositoryFactory.create('sg_prod_flow')
      }

    },

    created() {
      // this.loadEntityData();
      //   console.log("----------------------------------------------------------------------");
        this.createdComponent();

        this.stepNodes = this.getNodes();
    },

    mounted() {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');

        canvas.width = 504;
        canvas.height = 738;

        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 100, 100);

        ctx.fillStyle = 'red';
        ctx.fillRect(0, 150, 100, 100);

        ctx.fillStyle = 'yellow';
        ctx.fillRect(0, 300, 100, 100);

    },

    methods: {

        createdComponent() {
            this.loadEntityData();
            console.log("----------------------------------------------------------------------");
        },

        loadEntityData() {
            console.log("----------------------------------------------------------------------");
            this.isLoading = true;
            this.flowRepository.get(
                this.$route.params.id,
                Context.api
            ).then(entity=>{
               this.flow = entity;
               this.isLoading = false;
            }).catch(exception =>{
                this.isLoading = false;
                console.log('exception', exception);
            });
        },

        getNodes() {
            let nodes = [
                {
                    id: '1',
                    label: 'Step One',
                    nextNode: '2'
                },
                {
                    id: '2',
                    label: 'Step Two',
                    nextNode: '3'
                },
                {
                    id: '3',
                    label: 'Step Three',
                    nextNode: '4'
                },
                {
                    id: '4',
                    label: 'Step Four'
                },
            ];

            return this.sortNodes(nodes);

        },

        generateUuidv4(){
          var uuid = '', ii;
          for (ii = 0; ii < 32; ii+= 1) {
              switch (ii) {
                  case 8:
                  case 20:
                      uuid += '-';
                      uuid += (Math.random() * 16 | 0).toString(16);
                      break;
                  case 12:
                      uuid += '-';
                      uuid += '4';
                      break;
                  case 16:
                      uuid += '-';
                      uuid += (Math.random() * 4 | 8).toString(16);
                      break;
                  default:
                      uuid += (Math.random() * 16 | 0).toString(16);
              }
          }
          return uuid;
        },

        sortNodes(nodes) {
            let sortedNodes = [];
            let lastAdded = {};

            nodes.forEach(node => {
                if (!node.hasOwnProperty('nextNode')) {
                    lastAdded = node;
                    sortedNodes.push(lastAdded);
                }
            });

            if (!lastAdded.hasOwnProperty('id')){
                console.lof('Last Node missing!');
                return [];
            }

            //Step Four
            //lastNode.id == nextNode


            while (nodes.length !== sortedNodes.length){
                console.log('lastAdded', lastAdded);

                lastAdded = nodes.find(node => node.nextNode === lastAdded.id);

                sortedNodes.push(lastAdded);
            }

            console.log('sortedNodes', sortedNodes);

            sortedNodes.reverse();

            return sortedNodes;
        },

        saveFinish() {
           this.isSaveSuccessful = false;
       },

        /*onCancel() {
          this.$router.push({name: "sg.prod.flow.index"});
          console.log("Cancel");
        },*/

        onSave() {
            //console.log('save that Flow');
            this.isLoading = true;
            this.isSaveSuccessful = false;

            return this.flowRepository()
                .save(this.flow, Context.api )
                .then(()=> {
                    this.isLoading = false;
                    this.isSaveSuccessful = true;
                })
                .catch((exception) => {
                    console.log('exception', exception);
                })
        },

        onStateClick(id) {
          alert('Clicked on state with id: $(id)');
        },

        onAddStep(currentStepNode) {

            const newNodeId = this.generateUuidv4();

            if(!currentStepNode.hasOwnProperty('nextNode')) {
                this.stepNodes.push({
                    id: newNodeId,
                    label: 'New Mode Nr.' + newNodeId
                });
            }
            else {
                this.stepNodes.push({
                    id: newNodeId,
                    label: 'New Mode Nr.' + newNodeId,
                    nextNode: currentStepNode.nextNode
                });
            }

            this.stepNodes.forEach(stepNode => {
                if (currentStepNode === stepNode){
                    stepNode.nextNode = newNodeId;
                }
            });

            this.stepNodes = this.sortNodes(this.stepNodes);

        },

        stepNodePosition(stepNode, index) {

            console.log('stepNode', stepNode);
            const topPixel = index * 75;
            return {
                left: 0,
                top: topPixel + 'px'

            };
        },

        stepNodeRelationPosition(stepNodeRelation) {
            const topPositionOfStepNode = (parseInt(stepNodeRelation.sourceId) -1) * 75;
            let topPixel = topPositionOfStepNode + 35;
            return {
                left: '15px',
                top: topPixel + 'px'
            };
        }
    }
});

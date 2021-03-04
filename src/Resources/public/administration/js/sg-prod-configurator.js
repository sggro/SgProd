(this.webpackJsonp=this.webpackJsonp||[]).push([["sg-prod-configurator"],{Bmz5:function(t,e){t.exports='{%  block sw_product_detail_content_tabs_cross_selling %}\n    {%  parent %}\n    <sw-tabs-item\n        :route="{ name: \'sw.product.detail.prodConfiguration\', params: { id: $route.params.id } }"\n        title="Product Configuration">\n        Product Configuration\n    </sw-tabs-item>\n{% endblock %}\n'},"Gc+H":function(t,e){t.exports='{% block sg_prod_configuration_detail %}\n    <sw-page class="sg-prod-configuration-detail">\n        <template slot="smart-bar-header">\n            <h2>Create new configuration</h2>\n        </template>\n        <template slot="smart-bar-actions">\n\n            <sw-button\n                :routerLink="{ name: \'sg.prod.configuration.index\' }">\n                Cancel\n            </sw-button>\n\n            <sw-button-process\n                class="sw-property-detail__save-action"\n                :isLoading="isLoading"\n                :processSuccess="isSaveSuccessful"\n                :disabled="isLoading"\n                @process-finish="saveFinish"\n                variant="primary"\n                @click.prevent="onSave">\n                Save\n            </sw-button-process>\n\n        </template>\n        <template #content>\n            <sw-card-view slot="content" v-if="configuration">\n                <sw-card title="Basic Information">\n                    <sw-field\n                        label="Name"\n                        placeholder="Put the name here"\n                        v-model="configuration.name">\n                        Lorem ipsum dolor sit amet\n                    </sw-field>\n                </sw-card>\n                <sw-card title="Flow Assignment">\n                    <sw-entity-single-select\n                        entity="sg_prod_flow"\n                        v-model="configuration.flowId"\n                        placeholder="Assign Flow here">\n                    </sw-entity-single-select>\n                </sw-card>\n            </sw-card-view>\n        </template>\n\n    </sw-page>\n{% endblock %}\n'},ODiM:function(t,e){const{Component:o,Context:n}=Shopware;o.extend("sg-prod-flow-create","sg-prod-flow-detail",{methods:{loadEntityData(){this.flow=this.flowRepository.create(n.api),console.log("flow",flow)},onSave(){return console.log("save that Flow"),this.isLoading=!0,this.isSaveSuccessful=!1,this.flowRepository.save(this.flow,n.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,this.$router.push({name:"sg.prod.flow.detail",params:{id:this.flow.id}})}).catch(t=>{console.log("exception",t)})}}})},XQli:function(t,e){t.exports='{% block sg_prod_flow_index %}\n    <sw-page class="sg-prod-flow-index">\n        <template slot="smart-bar-actions">\n            <sw-button\n                variant="primary"\n                :routerLink="{ name: \'sg.prod.flow.create\' }">\n                 Create new Flow here\n            </sw-button>\n        </template>\n        <template #content>\n            <sw-entity-listing\n                v-if="flows"\n                :items="flows"\n                :repository="repository"\n                :showSelection="false"\n                :columns="columns"\n                detailRoute="sg.prod.flow.detail">\n            </sw-entity-listing>\n        </template>\n    </sw-page>\n{% endblock %}\n'},Y0Jf:function(t,e){t.exports='{% block sg_prod_flow_detail %}\n    <sw-page class="sg-prod-flow-detail">\n        <template slot="smart-bar-header">\n            <h2>Create new Flow here</h2>\n        </template>\n        <template slot="smart-bar-actions">\n\n                <sw-button\n                    :routerLink="{ name: \'sg.prod.flow.index\' }">\n                    Abbrechen\n                </sw-button>\n\n                <sw-button-process\n                    class="sw-property-detail__save-action"\n                    :isLoading="isLoading"\n                    :processSuccess="isSaveSuccessful"\n                    :disabled="isLoading"\n                    @process-finish="saveFinish"\n                    variant="primary"\n                    @click.prevent="onSave">\n                    Save\n                </sw-button-process>\n\n        </template>\n        <template #content>\n            <sw-card-view slot="content">\n                <sw-card v-if="flow" title="Basic Information">\n                    <sw-text-field\n                        label="Name"\n                        placeholder="Put the name here"\n                        v-model="flow.name">\n                    </sw-text-field>\n                </sw-card>\n                <sw-card title="Step">\n                    <sw-container columns="1fr 1fr">\n                        <sw-card-section divider="right">\n                            From Step:\n                                {#<sw-entity-single-select\n                                    entity="sg_prod_configuration"\n                                    placeholder="Select From Step">\n                                </sw-entity-single-select>#}\n                        </sw-card-section>\n                        <sw-card-section>\n                            To Step:\n                            {#<sw-entity-single-select\n                                entity="sg_prod_configuration"\n                                placeholder="Select To Step">\n                            </sw-entity-single-select>#}\n                        </sw-card-section>\n                    </sw-container>\n                    <sw-container columns="1fr 1fr">\n                        <sw-card-section divider="right">\n                        </sw-card-section>\n                        <sw-card-section>\n                            <sw-button\n                                variant="primary"\n                                @click="onAddStep">\n                                Add to Flow\n                            </sw-button>\n                        </sw-card-section>\n                    </sw-container>\n                </sw-card>\n                <sw-card title="Flow Config">\n                    <div style="height: 500px; position: relative">\n                        <div v-for="(stepNode, index) in stepNodes"\n                            :key="stepNode.id"\n                            class="stepNode"\n                            :style="stepNodePosition(stepNode, index)">\n                            <div class="stepNode-label">{{ stepNode.label }}</div>\n                            <button  @click="onAddStep(stepNode)">\n                                <sw-icon name="default-basic-plus-circle" size="24"></sw-icon>\n                            </button>\n                        </div>\n{#                        <div v-for="stepNodeRelation in stepNodeRelations" class="stepNodeRelation" :style="stepNodeRelationPosition(stepNodeRelation)"></div>#}\n                    </div>\n\n                    {#<span v-for="step in steps" :key="step.id">\n                        {{ step.label }}\n                    </span>#}\n\n                    {#<WorkflowChart :transitions=[]\n                                :states="states"\n                                @state-click="onStateClick($event)" />#}\n                </sw-card>\n\n            </sw-card-view>\n        </template>\n\n    </sw-page>\n{% endblock %}\n'},hOu5:function(t,e,o){"use strict";o.r(e);var n=o("XQli"),i=o.n(n);const{Component:s,Data:a,Context:r}=Shopware,{Criteria:l}=a;s.register("sg-prod-flow-index",{template:i.a,inject:["repositoryFactory"],data:()=>({flows:null,repository:null}),created(){this.createdComponent()},computed:{columns:()=>[{property:"name",dataIndex:"name",label:"Name",routerLink:"sg.prod.flow.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"createdAt",dataIndex:"createdAt",label:"Created At",allowResize:!0}]},methods:{createdComponent(){this.repository=this.repositoryFactory.create("sg_prod_flow"),this.repository.search(new l,r.api).then(t=>{this.flows=t})}}});var c=o("Y0Jf"),d=o.n(c);o("hToH");const{Component:p,Context:g}=Shopware;p.register("sg-prod-flow-detail",{template:d.a,components:{},inject:["repositoryFactory"],data:()=>({isLoading:!1,isSaveSuccessful:!1,flow:null,stepNodes:[]}),computed:{flowRepository(){return this.repositoryFactory.create("sg_prod_flow")}},created(){this.createdComponent(),this.stepNodes=this.getNodes()},mounted(){const t=document.getElementById("canvas"),e=t.getContext("2d");t.width=504,t.height=738,e.fillStyle="green",e.fillRect(0,0,100,100),e.fillStyle="red",e.fillRect(0,150,100,100),e.fillStyle="yellow",e.fillRect(0,300,100,100)},methods:{createdComponent(){this.loadEntityData(),console.log("----------------------------------------------------------------------")},loadEntityData(){console.log("----------------------------------------------------------------------"),this.isLoading=!0,this.flowRepository.get(this.$route.params.id,g.api).then(t=>{this.flow=t,this.isLoading=!1}).catch(t=>{this.isLoading=!1,console.log("exception",t)})},getNodes(){return this.sortNodes([{id:"1",label:"Step One",nextNode:"2"},{id:"2",label:"Step Two",nextNode:"3"},{id:"3",label:"Step Three",nextNode:"4"},{id:"4",label:"Step Four"}])},generateUuidv4(){var t,e="";for(t=0;t<32;t+=1)switch(t){case 8:case 20:e+="-",e+=(16*Math.random()|0).toString(16);break;case 12:e+="-",e+="4";break;case 16:e+="-",e+=(4*Math.random()|8).toString(16);break;default:e+=(16*Math.random()|0).toString(16)}return e},sortNodes(t){let e=[],o={};if(t.forEach(t=>{t.hasOwnProperty("nextNode")||(o=t,e.push(o))}),!o.hasOwnProperty("id"))return console.lof("Last Node missing!"),[];for(;t.length!==e.length;)console.log("lastAdded",o),o=t.find(t=>t.nextNode===o.id),e.push(o);return console.log("sortedNodes",e),e.reverse(),e},saveFinish(){this.isSaveSuccessful=!1},onSave(){return this.isLoading=!0,this.isSaveSuccessful=!1,this.flowRepository().save(this.flow,g.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0}).catch(t=>{console.log("exception",t)})},onStateClick(t){alert("Clicked on state with id: $(id)")},onAddStep(t){const e=this.generateUuidv4();t.hasOwnProperty("nextNode")?this.stepNodes.push({id:e,label:"New Mode Nr."+e,nextNode:t.nextNode}):this.stepNodes.push({id:e,label:"New Mode Nr."+e}),this.stepNodes.forEach(o=>{t===o&&(o.nextNode=e)}),this.stepNodes=this.sortNodes(this.stepNodes)},stepNodePosition:(t,e)=>(console.log("stepNode",t),{left:0,top:75*e+"px"}),stepNodeRelationPosition:t=>({left:"15px",top:75*(parseInt(t.sourceId)-1)+35+"px"})}});o("ODiM");const{Module:u}=Shopware;u.register("sg-prod-flow",{type:"plugin",name:"flow",title:"Flow",description:"Manage Product configuration flows",color:"#009bd9",routes:{index:{component:"sg-prod-flow-index",path:"index"},detail:{component:"sg-prod-flow-detail",path:"detail/:id",meta:{parentPath:"sg-prod-flow-index"}},create:{component:"sg-prod-flow-create",path:"create",meta:{parentPath:"sg-prod-flow-index"}}},navigation:[{id:"sg-prod-flow",label:"Product Flow",color:"#009bd9",path:"sg.prod.flow.index",parent:"sw-catalogue",position:100}]});var h=o("sI17"),f=o.n(h);const{Component:w,Data:m,Context:y}=Shopware,{Criteria:v}=m;w.register("sg-prod-configuration-index",{template:f.a,inject:["repositoryFactory"],data:()=>({configurations:null,repository:null}),created(){this.createdComponent()},computed:{columns:()=>[{property:"name",dataIndex:"name",label:"Name",routerLink:"sg.prod.configuration.detail",inlineEdit:"string",allowResize:!0,primary:!0},{property:"createdAt",dataIndex:"createdAt",label:"Created At",allowResize:!0}]},methods:{createdComponent(){this.repository=this.repositoryFactory.create("sg_prod_configuration"),this.repository.search(new v,y.api).then(t=>{this.configurations=t})}}});var S=o("Gc+H"),b=o.n(S);const{Component:x,Context:C}=Shopware;x.register("sg-prod-configuration-detail",{template:b.a,inject:["repositoryFactory"],data:()=>({isLoading:!1,isSaveSuccessful:!1,configuration:null}),computed:{configurationRepository(){return this.repositoryFactory.create("sg_prod_configuration")}},created(){this.loadEntityData(),console.log("----------------------------------------------------------------------")},methods:{createdComponent(){this.loadEntityData(),console.log("----------------------------------------------------------------------")},loadEntityData(){console.log("----------------------------------------------------------------------"),this.isLoading=!0,this.configurationRepository.get(this.$route.params.id,C.api).then(t=>{this.configuration=t,this.isLoading=!1}).catch(t=>{this.isLoading=!1,console.log("exception",t)})},saveFinish(){this.isSaveSuccessful=!1},onSave(){return console.log("save that configuration*****************************************************"),this.isLoading=!0,this.isSaveSuccessful=!1,this.configurationRepository().save(this.configuration,C.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,console.log("CONFIG&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")}).catch(t=>{console.log("exception",t)})}}});o("i7QD");var N=o("Bmz5"),_=o.n(N);const{Component:k}=Shopware;k.override("sw-product-detail",{template:_.a});var L=o("yT5/"),F=o.n(L);const{mapGetters:R,mapState:P}=Shopware.Component.getComponentHelper(),{Component:A}=Shopware;A.register("sw-product-detail-prod-configuration",{template:F.a,metaInfo:()=>({title:"Product Configuration"}),computed:{...P("swProductDetail",["product"])}});const{Module:I}=Shopware;I.register("sg-prod-configuration",{type:"plugin",name:"Configuration",title:"Configuration",description:"Manage Product configurations",color:"#009bd9",routes:{index:{component:"sg-prod-configuration-index",path:"index"},detail:{component:"sg-prod-configuration-detail",path:"detail/:id",meta:{parentPath:"sg-prod-configuration-index"}},create:{component:"sg-prod-configuration-create",path:"create",meta:{parentPath:"sg-prod-configuration-index"}}},navigation:[{id:"sg-prod-configuration",label:"Product Configuration",color:"#009bd9",path:"sg.prod.configuration.index",parent:"sw-catalogue",position:110}],routeMiddleware(t,e){"sw.product.detail"===e.name&&e.children.push({name:"sw.product.detail.prodConfiguration",path:"/sw/product/detail/:id/prodConfiguration",component:"sw-product-detail-prod-configuration",meta:{parentPath:"sw.product.index"}}),t(e)}})},hToH:function(t,e,o){var n=o("p7yw");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,o("SZ7m").default)("38752ac0",n,!0,{})},i7QD:function(t,e){const{Component:o,Context:n}=Shopware;o.extend("sg-prod-configuration-create","sg-prod-configuration-detail",{methods:{loadEntityData(){this.configuration=this.configurationRepository.create(n.api),console.log("configuration",configuration)},onSave(){return console.log("save that configuration"),this.isLoading=!0,this.isSaveSuccessful=!1,this.configurationRepository.save(this.configuration,n.api).then(()=>{this.isLoading=!1,this.isSaveSuccessful=!0,this.$router.push({name:"sg.prod.configuration.detail",params:{id:this.configuration.id}})}).catch(t=>{console.log("exception",t)})}}})},p7yw:function(t,e,o){},sI17:function(t,e){t.exports='{% block sg_prod_configuration_index %}\n    <sw-page class="sg-prod-configuration-index">\n        <template slot="smart-bar-actions">\n            <sw-button\n                variant="primary"\n                :routerLink="{ name: \'sg.prod.configuration.create\' }">\n                Create new Configuration\n            </sw-button>\n        </template>\n        <template #content>\n            <sw-entity-listing\n                v-if="configurations"\n                :items="configurations"\n                :repository="repository"\n                :showSelection="false"\n                :columns="columns"\n                detailRoute="sg.prod.configuration.detail">\n            </sw-entity-listing>\n        </template>\n    </sw-page>\n{% endblock %}\n'},"yT5/":function(t,e){t.exports='<sw-card title="Product Configuration">\n    <sw-entity-single-select\n        entity="sg_prod_configuration"\n        v-model="product.prodConfigurationId"\n        placeholder="Assign Configuration here">\n    </sw-entity-single-select>\n</sw-card>\n'}},[["hOu5","runtime","vendors-node"]]]);
<template>
  <div id="app">
    <a href="javascript:;" @click="showModel">我是首页</a>
    <Model v-show="model.state" :context="model.context" :topClass="model.topClass"></Model>
    <router-view></router-view>   
  </div>
</template>

<script>
export default {
    name: 'app',
    data(){
  	    return{

  	    }
    },
    computed:{
        model(){
            return this.$store.state.model;
        }
    },
    methods:{
        showModel(){
            this.modelCommonTip('我是测试',2000,'topClass')
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
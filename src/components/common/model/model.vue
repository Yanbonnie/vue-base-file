<template>
  <section class="comModel" :class="topClass">
      <p class="cube">{{context}}</p>
  </section>
</template>
<script>
    export default{
        name:"model",
        props:{
            context:{        //是否自动消失。默认不自动消失，如果要自动消失，请设置：autoClose = 'true'
                type:String,
                default:'我是提示内容'
            },
            topClass:{
                type:String,
                default:''
            }
        }
    }
</script>
<style lang="scss" scoped>
.comModel{
    position: fixed;
    z-index: 10000;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-52%);
    -ms-transform: translate(-50%,-52%);
    background:rgba(0,0,0,0.7);
    color: #fff;
    padding: 20px;
    border-radius:10px;
    -ms-border-radius:10px;
    min-width:150px;
    text-align: center; 
    &.topClass{
        top: 30%;
    }
}
</style>

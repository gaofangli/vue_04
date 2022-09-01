<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/* ::-webkit-scrollbar {
    display: none;
}
 /* :root代表html元素 */
/* :root {
    overflow-y: auto;
    overflow-x: hidden;
  } */
/* 17px是我电脑当前分标率下滚动条的宽度，可自行设置宽度*/
/* body {
  position: absolute;
  width: calc(
    100vw - 17px
  ); 
  overflow: hidden;
} */
body,
html {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
* {
  margin: 0px;
  padding: 0px;
}
#app {
}
</style>

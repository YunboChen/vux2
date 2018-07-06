<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
img { 
  content: normal !important; /*解决vw兼容的副作用副作用*/
}
[aspectratio] {
   position: relative; 
} 
[aspectratio]::before { 
  content: ''; 
  display: block; 
  width: 1px; 
  margin-left: -1px; 
  height: 0; 
} 
[aspectratio-content] { 
  position: absolute; 
  top: 0; 
  left: 0; 
  right: 0; 
  bottom: 0; 
  width: 100%; 
  height: 100%; 
}
</style>

{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import FastClick from 'fastclick'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import router from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#axios}}
//axios
import axios from './axios'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(axios){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/axios}}
{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}


FastClick.attach(document.body){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  router,
  {{#vuex}}
  store,
  {{/vuex}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app-box'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

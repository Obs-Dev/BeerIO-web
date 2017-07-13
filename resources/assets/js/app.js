
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example', require('./components/Example.vue'));
// Vue.component('items', require('./components/Items.vue'));
//
// const app = new Vue({
//     el: '#app'
// });

/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * We will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */
import VueRouter  from 'vue-router'
import router     from './router'
import Vue        from 'vue'
import VueRecource from 'vue-resource';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import Auth from './components/auth/Auth.js';
import App from './App.vue'
import Notification from './components/Notification.vue';
import Notifier from './components/notifications/Notifier.js';
import ItemMixin from './components/api/ItemMixin.js';
import UserMixin from './components/api/UserMixin.js';
import moment from 'moment'

Vue.mixin(ItemMixin);
Vue.mixin(UserMixin);
Vue.use(VueRouter)
Vue.use(VueRecource);
Vue.use(Auth);
Vue.use(Notifier);
Vue.use(VueMaterial);

Vue.component('notification', Notification);


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
});
Vue.http.interceptors.push((request, next) => {
    request.headers.set('X-CSRF-TOKEN', Laravel.csrfToken);
    request.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    next();
});

router.beforeEach((to,from,next)=>{

  if(to.matched.some(record => record.meta.forVisitors)){
    console.log("Pre routing logic for visits");
    if(Vue.auth.isAuthenticated()){
      console.log("Authenticated");
      next({
        path:'/dashboard'
      })
    }else next()
  }else if(to.matched.some(record => record.meta.forLoggedInOnly)){
    console.log("Pre routing logic for logged in users only");
    if(Vue.auth.isAuthenticated()){
      console.log("Authenticated");
      next()
    }else next({
      path:'/auth/login'
    })
  }else next()
})
// lazy load components
const Items = (resolve) => require(['./components/Items.vue'], resolve)
const Navigation = (resolve) => require(['./components/Navigation.vue'], resolve)
// Create and mount root instance.
// Make sure to inject the router.
// Route components will be rendered inside <router-view>.


const app = new Vue({
    el: '#app',
    components: { App },
    template: '<app></app>',
    router
})

import VueRouter    from 'vue-router'

//Define route components
const Home = { template: '<div>home</div>' }
const Foo = { template: '<div>Foo</div>' }
const Bar = { template: '<div>Bar</div>' }

// lazy load components
const Items = (resolve) => require(['./components/Items.vue'], resolve)
const NotFoundView = (resolve) => require(['./components/NotFoundView.vue'], resolve)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        { path: '/', component: Home },
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar },
        { path: '/items', component: Items },  // example of route with a seperate component
        { path: '*', component: NotFoundView }
      ]
});

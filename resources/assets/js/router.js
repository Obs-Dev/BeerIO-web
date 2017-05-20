import VueRouter    from 'vue-router'

//Define route components
const Home = { template: '<div>home</div>' }

// lazy load components

const ItemDetail = (resolve) => require(['./components/ItemDetail.vue'], resolve)
const NotFoundView = (resolve) => require(['./components/NotFoundView.vue'], resolve)
const AuthorizedClients = (resolve) => require(['./components/passport/Clients.vue'], resolve)
const Login = (resolve) => require(['./components/Login.vue'], resolve)
const Logout = (resolve) => require(['./components/Logout.vue'], resolve)
const Dashboard = (resolve) => require(['./components/Dashboard.vue'], resolve)
const Profile = (resolve) => require(['./components/Profile.vue'], resolve)
const Items = (resolve) => require(['./components/Items.vue'], resolve)

export default new VueRouter({
    mode: 'history',
    base: __dirname,
      routes: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/items',
          name: 'items',
          component: Items,
          meta: {
            forLoggedInOnly: true
          }
        },
        {
          path: '/items/:type/:id',
          name: 'item',
          component: ItemDetail
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile,
          meta: {
            forLoggedInOnly: true
          }
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/auth/login',
          name: 'login',
          component: Login,
          meta: {
            forVisitors: true
          }
        },
        {
          path: '/auth/logout',
          name: 'logout',
          component: Logout,
        },
        {
          path: '/test',
          name: 'testt',
          component: AuthorizedClients },
        {
          path: '*',
          component: NotFoundView }
      ]
});

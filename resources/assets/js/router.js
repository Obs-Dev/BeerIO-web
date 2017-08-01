import VueRouter    from 'vue-router'

//Define route components
const Home = { template: '<div>home</div>' }

// lazy load components
//const ItemDetail = (resolve) => require(['./components/ItemDetail.vue'], resolve).default
const NotFoundView = (resolve) => require(['./components/NotFoundView.vue'], resolve)
const AuthorizedClients = (resolve) => require(['./components/passport/Clients.vue'], resolve)
const Login = (resolve) => require(['./components/Login.vue'], resolve)
const Logout = (resolve) => require(['./components/Logout.vue'], resolve)
const Dashboard = (resolve) => require(['./components/Dashboard.vue'], resolve)
const People = (resolve) => require(['./components/People.vue'], resolve)
const Discover = (resolve) => require(['./components/Discover.vue'], resolve)

//needs to be loaded  eagerly because used in nested routes.
//Nested routes have issues with going directly to them, or being reloaded
import Items from './components/Items'; 
import ItemDetail from './components/ItemDetail'; 
import Profile from './components/Profile'; 
import Register from './components/Register'; 

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
        },

        {
          path: '/items/:type/:id',
          name: 'item',
          component: ItemDetail,
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
          path: '/profile/:id',
          name: 'profileId',
          component: Profile
        },
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard,
          meta: {
            forLoggedInOnly: true
          }
        },
        {
          path: '/discover',
          name: 'discover',
          component: Discover,
          meta: {
            forLoggedInOnly: true
          }
        },
        {
          path: '/authlogin',
          name: 'login',
          component: Login,
          meta: {
            forVisitors: true
          }
        },
        {
          path: '/authlogout',
          name: 'logout',
          component: Logout,
        },
        {
          path: '/people',
          name: 'people',
          component: People
        },
        {
          path: '/authregister',
          name: 'register',
          component: Register
        },
        // {
        //   path: '/test',
        //   name: 'testt',
        //   component: AuthorizedClients
        // },
        {
          path: '*',
          component: NotFoundView
        }
      ]
});

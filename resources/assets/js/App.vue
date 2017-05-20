<template>

    <div id="app">


        <!-- Always shows a header, even in smaller screens. -->
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">
              <!-- Title -->
              <span class="mdl-layout-title">BeerIO</span>
              <!-- Add spacer, to align navigation to the right -->
              <div class="mdl-layout-spacer"></div>
              <!-- Navigation. We hide it in small screens. -->
              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link" href="">Dashboard</a>
                <a class="mdl-navigation__link" href="">Friends</a>
                <router-link to="/items" class="mdl-navigation__link">Brews</router-link>
                <a class="mdl-navigation__link" href="/beer">Discover</a>
                <a class="mdl-navigation__link" href="">About</a>
                <span v-if="this.$auth.isAuthenticated()">

                    <router-link to="/auth/logout" class="mdl-navigation__link">Logout</router-link>
                </span>
                <span v-else>
                    <router-link to="/auth/login" class="mdl-navigation__link">Login</router-link>
                </span>
              </nav>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Test</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">Dashboard</a>
              <!--<router-link to="/" class="mdl-navigation__link">Test</router-link>-->
              <a class="mdl-navigation__link" href="">Friends</a>
              <router-link to="/items" class="mdl-navigation__link">Brews</router-link>
              <a class="mdl-navigation__link" href="/beer">Discover</a>
              <a class="mdl-navigation__link" href="">About</a>
              <span v-if="this.$auth.isAuthenticated()">
                  <router-link to="/auth/logout" class="mdl-navigation__link">Logout</router-link>
              </span>
              <span v-else>
                  <router-link to="/auth/login" class="mdl-navigation__link">Login</router-link>
              </span>
            </nav>
          </div>

          <main class="mdl-layout__content">
            <notification></notification>
            <!--<div class="page-content">@yield('content')</div>-->
            <router-view class="view"></router-view>

          </main>
          <footer class="mdl-mini-footer">
            <div class="mdl-mini-footer__left-section">
              <div class="mdl-logo">BeerIO</div>
              <ul class="mdl-mini-footer__link-list">
                <li><a href="#">Help</a></li>
                <li><a href="#">Privacy & Terms</a></li>
              </ul>
            </div>
          </footer>


        </div>



      </div>


</div>
</template>
<script>
export default {


    methods: {
      logout(){
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/auth/login')

      }

    }
}
</script>

<template>
    <div id="app">
      <nav class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">BeerIO</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/items">Find</a></li>
            <li><a href="/discover">Discover</a></li>
            <li><a href="/people">People</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li  v-show="this.$auth.isAuthenticated()"  class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/profile">View/Edit Profile</a></li>
                <li><a href="/authlogout">Logout</a></li>

              </ul>
            </li>
            <li v-show="!this.$auth.isAuthenticated()"><a href="/authlogin">Login</a></li>
            <li v-show="!this.$auth.isAuthenticated()"><a href="/register">Register</a></li>

          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      <div class="">
        <notification></notification>

        <router-view class="view"></router-view>
      </div>
    </div>
</template>
<script>
export default {


    methods: {
      logout(){
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/authlogin')

      }

    }
}
</script>
<style>

</style>

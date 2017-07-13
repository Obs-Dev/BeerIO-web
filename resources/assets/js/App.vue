<template>

    <div id="app">

          <div class="phone-viewport">

            <md-toolbar>
              <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
              </md-button>

              <h2 class="md-title">BeerIO</h2>
            </md-toolbar>


            <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
              <md-toolbar class="md-account-header">
                    <md-list class="md-transparent">
                      <md-list-item class="md-avatar-list">
                        <md-avatar class="md-large">
                          <img src="https://placeimg.com/64/64/people/8" alt="People">
                        </md-avatar>

                        <span style="flex: 1"></span>

                      </md-list-item>

                      <md-list-item>
                        <div v-show="this.$auth.isAuthenticated()" class="md-list-text-container">
                          <span>Ryan Kazokas</span>
                          <span>ryan.kazokas@gmail.com</span>
                        </div>
                        <div v-show="!this.$auth.isAuthenticated()" class="md-list-text-container">
                          <span>Not Logged In</span>
                          <router-link to="/auth/login" class="mdl-navigation__link">Login</router-link>
                        </div>

                        <md-button class="md-icon-button md-list-action">
                          <md-icon>arrow_drop_down</md-icon>
                        </md-button>
                      </md-list-item>
                    </md-list>
                  </md-toolbar>

                  <md-list>
                    <md-list-item @click.native="$refs.sidenav.toggle()" class="md-primary">
                      <md-icon>insert_drive_file</md-icon> <span>My files</span>
                    </md-list-item>

                    <md-list-item @click.native="$refs.sidenav.toggle()">
                      <md-icon>people</md-icon> <span>Shared with me</span>
                    </md-list-item>

                    <md-list-item @click.native="$refs.sidenav.toggle()">
                      <md-icon>access_time</md-icon> <span>Recent</span>
                    </md-list-item>

                    <md-list-item @click.native="$refs.sidenav.toggle()">
                      <md-icon>start</md-icon> <span>Starred</span>
                    </md-list-item>

                    <md-list-item @click.native="$refs.sidenav.toggle()">
                      <md-icon>delete</md-icon> <span>Trash</span>
                    </md-list-item>
                  </md-list>
            </md-sidenav>



                                                </div>
                                                <div class="">
                                                  <notification></notification>

                                                  <router-view class="view"></router-view>
                                                </div>
                                                            <!--<md-layout md-gutter md-align="center">

                                                                <notification></notification>

                                                                <router-view class="view"></router-view>


                                                            </md-layout>-->
          </div>

      </div>



</template>
<script>
export default {


    methods: {
      logout(){
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/auth/login')

      },
      toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }

    }
}
</script>
<style>

</style>

<template>
    <md-layout>
      <md-layout md-flex="30"></md-layout>
      <md-layout md-tag="form" novalidate @submit.stop.prevent="submit" md-align="center">
        <span v-if="errorMessage">
                      <p class="warning-label">{{errorMessage}}</p>
                    </span>
          <md-layout md-tag="md-card" md-column >

            <md-card-header>
              <div class="md-title">Login</div>
            </md-card-header>

            <md-card-content>
              <md-input-container>
                <md-icon>person</md-icon>
                <label>Email</label>
                <md-input email required v-model="email" />
              </md-input-container>

              <md-input-container md-has-password>
                <md-icon>lock</md-icon>
                <label>Password</label>
                <md-input type="password" required v-model="password" />
              </md-input-container>
            </md-card-content>

            <md-card-actions>
              <md-button v-show="!loadingLogin" type="button" @click.native="login">Login</md-button>
            </md-card-actions>
          </md-layout>
        </md-layout>
    <md-layout md-flex="30"></md-layout>
</md-layout>

</template>

    <script>
    export default {
        data: function() {
            return {
              email: null,
              password: null,
              errorMessage: '',
              loadingLogin: false
            };
        },
        mounted() {

            console.log('Login Component mounted.');

        },
        methods: {
          login(){
            this.loadingLogin = true;
            var data = {
              client_id:"1",
              client_secret:"WLbnPBVennWVO5kZZEre31kQ0Qb6KzobTtpoplVv",
              grant_type:"password",
              username: this.email,
              password: this.password
            }
            this.$http.post("/oauth/token",data)
              .then((response) => {
                console.log(response);
                if(response.status==200){
                  console.log("Login Success. Setting Token!!");
                  this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
                  this.$router.push('/dashboard')
                }
                this.loadingLogin = false;
              }, (response) => {
                var message = "";
                if(response.body.hint)
                  message = response.body.hint;
                else
                  message = response.body.message;

                this.errorMessage = message;
                this.loadingLogin = false;
              }
            );
          }

        }
    }
    </script>

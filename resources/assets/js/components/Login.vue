<template>
    <!--<md-layout>
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
</md-layout>-->
  <div class = "container">
    <div class="wrapper">

      <h3 class="form-signin-heading">Welcome Back! Please Sign In</h3>
      <hr class="colorgraph"><br>
      <span v-if="errorMessage">
        <p class="warning-label">{{errorMessage}}</p>
      </span>
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email" required="" autofocus="" />
      <input v-model="password"  type="password" class="form-control" name="Password" placeholder="Password" required=""/>     		  
    
      <button v-on:click="login" class="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="button">Login</button>  			

    </div>
  </div>
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
              client_id:process.env.MIX_CLIENT_ID,
              client_secret:process.env.MIX_CLIENT_SECRET,
              grant_type:"password",
              username: this.email,
              password: this.password
            }
            this.$http.post("/oauth/token",data)
              .then((response) => {
                console.log(response);
                if(response.status==200){

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

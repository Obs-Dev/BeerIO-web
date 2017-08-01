<template>

  <div class = "container">
    <div>

      <h3>Welcome Back to BeerIO! Please Sign In</h3>
      <hr class="colorgraph"><br>
      <span v-if="errorMessage">
        <p class="warning-label">{{errorMessage}}</p>
      </span>
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email" required="" autofocus="" />
      <input v-model="password"  type="password" class="form-control" name="Password" placeholder="Password" required=""/>     		  
    
      <button v-on:click="login" class="btn btn-lg btn-primary btn-block"  name="Submit" value="Login" type="button">Login</button>  			
      Don't have an account? <router-link :to="{name:'register'}">Click here to register for one! </router-link>
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

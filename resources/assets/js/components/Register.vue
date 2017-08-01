<template>
  <div class = "container">
    <div>
    <div v-if="this.loadingRegister">

      <span >
        <div class="progress">
          <div class="progress-bar progress-bar-striped active" role="progressbar"
          aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
            Loading...
          </div>
        </div>
      </span>
    </div>
      <h3>Register an Account with BeerIO</h3>
      <hr class="colorgraph"><br>
      <span v-if="errorMessage">
        <p class="warning-label">{{errorMessage}}</p>
      </span>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name"  type="text" class="form-control" name="name" placeholder="Name" required=""/>   		  
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input v-model="email" type="text" class="form-control" name="email" placeholder="Email" required="" autofocus="" />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password"  type="password" class="form-control" name="Password" placeholder="Password" required=""/>   
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input v-model="confirmPassword"  type="password" class="form-control" name="ConfirmPassword" placeholder="Confirm Password" required=""/>   		  
      </div>
      <button v-on:click="register" class="btn btn-lg btn-primary btn-block"  name="Submit" value="Register" type="button">Register</button>  			

    </div>
  </div>
</template>

    <script>
    export default {
        data: function() {
          return {
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
            errorMessage:"",
            loadingRegister:false
          }
        },
        mounted() {

            console.log('Register Component mounted.');

        },
        methods: {
          register(){
            console.log('Registering Users.');

            this.loadingRegister = true;
            var data = {
              email: this.email,
              password: this.password,
              confirmPassword: this.confirmPassword,
              name:  this.name
            }
            this.$http.post("/api/register",data)
              .then((response) => {
                console.log(response);
                if(response.status==200){
                  var oauthData = {
                    client_id:process.env.MIX_CLIENT_ID,
                    client_secret:process.env.MIX_CLIENT_SECRET,
                    grant_type:"password",
                    username: this.email,
                    password: this.password
                  }
                  this.$http.post("/oauth/token",oauthData)
                    .then((response) => {
                      console.log(response);
                      if(response.status==200){

                        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())

                        
                        this.$router.push('/dashboard')
                      }
                      this.loadingRegister = false;
                    }, (response) => {
                      var message = "";
                      if(response.body.hint)
                        message = response.body.hint;
                      else
                        message = response.body.message;

                      this.errorMessage = message;
                      this.loadingRegister = false;
                    }
                  );
                }
                this.loadingRegister = false;
              }, (response) => {
                var message = "";
                if(response.body.hint)
                  message = response.body.hint;
                else
                  message = response.body.message;

                this.errorMessage = response.body;
                this.loadingRegister = false;
              }
            );
          }
        }
    }
    </script>

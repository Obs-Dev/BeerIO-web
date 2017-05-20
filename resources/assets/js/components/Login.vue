<template>
    <div class="login">

      <div class="mdl-grid">
          <div class="mdl-layout-spacer"></div>
          <div class="mdl-cell mdl-cell--4-col">
            <div v-show="loadingLogin" class="mdl-spinner mdl-js-spinner is-active"></div>
            <div v-show="!loadingLogin" class="mdl-layout mdl-js-layout mdl-color--grey-100">
            	<main class="mdl-layout__content">
            		<div class="mdl-card mdl-shadow--6dp">
            			<div class="mdl-card__title mdl-color--secondary mdl-color-text--grey">
            				<h2 class="mdl-card__title-text">Login</h2>
            			</div>
            	  	<div class="mdl-card__supporting-text">
                    <span v-if="errorMessage">
                      <p class="warning-label">{{errorMessage}}</p>
                    </span>
            				<form action="#">
            					<div class="mdl-textfield mdl-js-textfield">
            						<input class="mdl-textfield__input" type="text" id="email" v-model="email" />
            						<label class="mdl-textfield__label" for="email">Email</label>
            					</div>
            					<div class="mdl-textfield mdl-js-textfield">
            						<input class="mdl-textfield__input" type="password" id="userpass" v-model="password" />
            						<label class="mdl-textfield__label" for="userpass">Password</label>
            					</div>
            				</form>
            			</div>
            			<div class="mdl-card__actions mdl-card--border">
            				<button @click="login" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Sign In </button>
            			</div>
            		</div>
            	</main>
            </div>
          </div>
          <div class="mdl-layout-spacer"></div>
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

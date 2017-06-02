export default function (Vue){
  Vue.auth = {
    setToken (token, expiration)  {
      localStorage.setItem('token', token)
      localStorage.setItem('expiration', expiration)

    },

    destroyToken () {
      console.log("logging out!");
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },

    getToken () {

      var token = localStorage.getItem('token');
      var expiration = localStorage.getItem('expiration');

      if(!token || !expiration){
        console.log("Tokens are null");
        return null;
      }else
        return token;
      // //figure out refresh
      if(Date.now() < parseInt(expiration)){
        this.destroyToken();
        return null;
      }else {
        return token;
      }
    },

    isAuthenticated () {

      if(this.getToken())
        return true;
      else
        return false;
    },

    getLoggedInUser(){
      if(localStorage.getItem('userId')){
        return localStorage.getItem('userId');
      }
      if(!localStorage.getItem('userId')){
        var url = "/api/v1/current/user";
        Vue.http.get(url).then((response) => {
          localStorage.setItem('userId',response.data.id)
          return localStorage.getItem('userId');
        })
        .catch((error) => {
          console.log(error);
          throw "Couldn't Log in";
        });
      }
    }
  }

  Object.defineProperties(Vue.prototype,{
    $auth:{
      get:()=>{
        return Vue.auth
      }
    }
  })
}

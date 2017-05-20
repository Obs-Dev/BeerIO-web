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

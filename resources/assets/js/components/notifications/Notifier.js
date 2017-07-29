export default function (Vue){
  Vue.notifier = {
    notify (message)  {
      console.log(message);
      'use strict';
      var snackbarContainer = document.querySelector('#notification-snackbar');
      var data = {message: message};
      //if(data.message)
        //snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
  }

  Object.defineProperties(Vue.prototype,{
    $notifier:{
      get:()=>{
        return Vue.notifier
      }
    }
  })
}

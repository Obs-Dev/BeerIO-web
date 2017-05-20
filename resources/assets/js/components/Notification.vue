<template>
  <div id="notification-snackbar" class="mdl-js-snackbar mdl-snackbar">
    <div class="mdl-snackbar__text"></div>
    <button class="mdl-snackbar__action" type="button">Test</button>
  </div>
</template>
<script>
export default {
    data: function() {
        return {
            message: ''
        };
    },
    mounted() {
        console.log('Notification Component mounted.');
    },
    methods: {
      notify: function(messsage) {


      }
    }
}
</script>

<template>
    <div v-show="this.message">
        <div class="alert alert-warning alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>Alert!</strong>
            <div id="snackbar-text">{{this.message}}</div>
        </div>
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
        this.message = message;

      }
    }
}
</script>

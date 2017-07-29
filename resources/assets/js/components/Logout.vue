<template>
<div></div>
</template>
<script>
export default {

    mounted() {

        console.log('Login Component mounted.');
        this.logout();
    },
    methods: {
      logout(){
        this.$auth.destroyToken();
        this.$router.push('/authlogin')

      }

    }
}
</script>

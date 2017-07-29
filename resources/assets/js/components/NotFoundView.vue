<template>
    <div class="container">
      <h3>Oops!</h3>
      <h1 class="404error"> 404 - Not Found </h1>

      <div class="error-details">
          Sorry, an error has occured. Requested page not found!
      </div>
      <div class="error-actions">
          <router-link class="btn btn-primary btn-lg" to="/" ><span class="glyphicon glyphicon-home"></span>Take Me Home</router-link>

          <a href="https://github.com/ryankazokas/beerio-web/issues" class="btn btn-default btn-lg"><span class="glyphicon glyphicon-envelope"></span> File Issue Report </a>
      </div>
    </div>
</template>

    <script>
    export default {

        mounted() {
            console.log('Page not found!');
        }
    }
    </script>

<template>
    <div class="error">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--3-col">
          <img style="max-width:100%" src="/img/404-goat.jpg" />
        </div>
        <div class="mdl-cell mdl-cell--9-col">
          <h4>404 - The page you are looking for is not found!</h4>
          <router-link to="/" class="mdl-navigation__link">Click here to go back to the homepage</router-link>
        </div>
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

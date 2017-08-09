<template>
    <div class="container">
        <div class="jumbotron">
            <h1>BeerIO</h1>
            <p><small>An open source social app for craft beer drinkers! A way to discuss and communicate with other crafters.</small></p>
            <p><a class="btn btn-primary btn-lg" href="/authregister" role="button">Create an account</a> <a class="btn btn-primary btn-lg" href="/authlogin" role="button">Login</a></p>
        </div>
        <div class="col-md-12">
            <div class="col-md-4">
                <h2>Discover</h2>
                <p>Discover new craft beers that are taylored to your taste profile</p>
            </div>
            <div class="col-md-4">
                <h2>Communicate</h2>
                <p>Discuss brews with other users that have or don't have similar taste as you</p>
            </div>
            <div class="col-md-4">
                <h2>Interact</h2>
                <p>Save and check-in beers as a reminder for later!</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {

    mounted() {

        console.log('Home Component mounted.');

    },
    methods: {


    }
}
</script>

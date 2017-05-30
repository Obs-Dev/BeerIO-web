<template>

  <div class="col-md-12">

  </div>

</template>

    <script>
    export default {
        data: function() {
            return {
                item: {},
                id:-2,
                loadingDetail:true,
                isAuthenticated: false,
                favorited: false,
                message: 'item detail',
                comments: [],
                newComment: ""
            };
        },
        created(){

        },
        mounted() {

            console.log('Item Detail Component mounted.');
            this.fetchItemDetail(this.$route.params.id, this.$route.params.type);
            this.isAuthenticated = this.$auth.isAuthenticated();
            this.fetchFavorite(this.$route.params.id);
            this.fetchComments(this.$route.params.id);


        }
    }
    </script>

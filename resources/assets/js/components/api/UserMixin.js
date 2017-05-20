export default {

    mounted() {
        console.log('User Mixin mounted.');
    },
    methods: {
        fetchUser: function(id) {
            this.loadingDetail=true;
            var url = "/api/v1/user";

            this.$http.get(url)
                .then((response) => {
                    console.log(response.data.data);
                    this.user = response.data.data;
                    this.loadingDetail=false
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingDetail=false
                });

        }
    }
}

export default {

    mounted() {
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

        },

        updateUser: function(user) {
            this.loadingDetail=true;
            var url = "/api/v1/user/" + user.id;

            this.$http.put(url,user)
                .then((response) => {
                    //console.log(response.data.data);
                    //this.fetchUser();
                    this.$notifier.notify("Profile Saved!");
                    this.loadingDetail=false
                })
                .catch((error) => {
                    console.log(error);
                    this.updateUserError =true;
                    this.loadingDetail=false
                    this.$notifier.notify("Couldn't update user data");
                });

        }
    }
}

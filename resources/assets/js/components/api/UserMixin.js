export default {

    mounted() {
    },
    methods: {
        fetchUser: function(id) {

            this.loadingDetail=true;

            if(id == null){
              console.log("Getting current logged in user");
              this.editable = true;
              return this.fetchLoggedInUser();
            }
            var url = "/api/v1/user/"+id;
            console.log(url);
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
        fetchLoggedInUser: function(){
          var url = "/api/v1/current/user";
          this.$http.get(url)
              .then((response) => {
                console.log(response);
                var userUrl = "/api/v1/user/"+response.body.data.id;
                this.$http.get(userUrl)
                    .then((response) => {
                        this.user = response.body.data;
                        console.log(response);
                        this.loadingDetail=false
                    })
                    .catch((error) => {
                        console.log(error);
                        this.loadingDetail=false
                    });

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

        },
        fetchUsers: function(query) {
            this.loadingDetail=true;
            var url = "/api/v1/user?q="+query;

            this.$http.get(url)
                .then((response) => {
                    console.log(response.data.data);
                    this.users = response.data.data;
                    this.loadingDetail=false
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingDetail=false
                });

        },
    }
}

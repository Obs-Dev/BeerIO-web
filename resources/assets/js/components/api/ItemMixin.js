export default {

    mounted() {
        console.log('Item Mixin mounted.');
    },
    methods: {
        handleFavorite: function(itemId, type) {
          if(this.favorited){
            this.unfavoriteItem(itemId);
          }else {
            this.favoriteItem(itemId, type);
          }
        },
        favoriteItem: function(itemId, type) {
            var body = {
                itemId,
                type
            }
            this.$http.put('/api/v1/favorite/', body)
                .then((response) => {
                    'use strict';
                    this.$notifier.notify("Favorited!");
                    this.favorited = true;
                    console.log(response);

                })
                .catch((error) => {
                    console.log(error);
                    this.$notifier.notify("An error occurred adding to favorites. Please try again");
                });


        },
        unfavoriteItem: function(itemId) {

            this.$http.delete('/api/v1/favorite/'+itemId)
                .then((response) => {
                    'use strict';
                    this.$notifier.notify("Removed from favorites!");
                    this.favorited = false;

                })
                .catch((error) => {
                    console.log(error);
                    this.$notifier.notify("An error occurred removing from favorites. Please try again");
                });


        },
        fetchItemDetail: function(id, type) {
            this.loadingDetail = true;
            this.loadingDetailList = true;

            this.$http.get('/api/v1/item/' + id + '/type/' + type)
                .then((response) => {
                    this.item = response.data;
                    this.loadingDetail = false;
                    this.loadingDetailList = false;
                    this.detailList.push(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });

        },
        fetchList: function(q) {
            this.loadingList=true;
            var url = "";
            if(this.types!=null){
              url = '/api/v1/search?q='+q+'&type='+this.types.join();
            }else {
              url = '/api/v1/search?q='+q;
            }
            this.$http.get(url)
                .then((response) => {

                    this.list = response.data;
                    this.loadingList=false
                })
                .catch((error) => {
                    console.log(error);
                    this.loadingList=false
                });

        },
        search: function(event) {
          event.preventDefault();
          this.fetchList(this.term);
        },
        fetchFavorites: function() {

          this.$http.get('/api/v1/favorite')
              .then(function(response){

                var favoriteList = [];
                this.loadingDetailList = true;
                this.favorites = response.body.data;
                this.favorites.forEach(function(favorite) {

                  this.$http.get('/api/v1/item/' + favorite.item_id + '/type/' + favorite.type)
                      .then((response) => {
                          this.loadingDetailList = true;
                          console.log("Favorites with detail:");
                          var favoriteItem = response.data.data;
                          favoriteItem.favorited = favorite.created_at;
                          console.log(favoriteItem);
                          this.detailList.push(response.data);
                          this.loadingDetailList = false;
                      })
                      .catch((error) => {
                          console.log(error);
                      });

                }, this);

              }).catch(function(error){
                console.log("There was an error obtaining favorites from server");
                console.log(error);
              });

        },
        fetchFavorite: function(id) {

          this.$http.get('/api/v1/favorite')
              .then(function(response){

                response.body.data.forEach(function(favorite) {
                  if(favorite.item_id == id){
                    this.favorited = true;
                  }
                }, this);

              }).catch(function(error){

              });

        },
    }
}

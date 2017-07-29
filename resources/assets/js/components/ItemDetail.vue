<template>


  <div class="container">

    <div v-if="this.loadingDetail">

      <span >
            <div class="progress">
              <div class="progress-bar progress-bar-striped active" role="progressbar"
              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                Loading...
              </div>
            </div>
          </span>
    </div>
    <div v-if="item.data" class="col-md-12">
        
        <div class="col-md-2">
            <span v-if="item.data.labels">
            <img class="list-image" :src="item.data.labels.medium" style="max-width:100%;" />
          </span>
          <span v-else-if="item.data.images">
            <img class="list-image" :src="item.data.images.large" style="max-width:100%;" />
          </span>
          <span v-else>
            <img class="list-image" src="https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png" style="max-width:100%;" />
          </span>        
        </div>
        <div class="col-md-10">
          <h4>{{item.data.name}}
            <small>
              <span v-if="item.data.abv">
                ({{item.data.abv}}%)
              </span>
              <span v-if="item.data.established">
                (EST. {{item.data.established}})
              </span>
            </small>
          </h4>
          <p>{{item.data.description}}</p>
          <span v-if="this.$auth.isAuthenticated()">
            <span v-if="this.favorited">
              <button @click = "handleFavorite(item.data.id, $route.params.type)" 
                type="button" class="btn btn-success"><span class="glyphicon glyphicon-star" aria-hidden="true"></span> Liked</button>
            </span>
            <span v-else-if="!this.favorited">
              <button @click = "handleFavorite(item.data.id, $route.params.type)" 
                  type="button" class="btn btn-primary"><span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span> Like</button>
            </span>
          </span>
        </div>


    </div>

    <div class="col-md-12" style="margin-top: 25px;">
      <table class="table table-striped">
        <tbody>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Type</td>
            <td>{{this.$route.params.type}}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Status</td>
            <td>{{item.data.statusDisplay}}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">ABV</td>
            <td>{{item.data.abv}}%</td>
          </tr>
          <span v-if="item.data.glass">
          <tr>favorited
              <td class="mdl-data-table__cell--non-numeric">Glass</td>
              <td>{{item.data.glass.name}}</td>
          </tr>
          </span>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">IBU</td>
            <td>{{item.data.ibu}}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Last Updated</td>
            <td>{{item.data.updateDate}}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Organic</td>
            <td>{{item.data.isOrganic}}</td>
          </tr>
          <tr>
            <td class="mdl-data-table__cell--non-numeric">Website</td>
            <td><a :href="item.data.website" target="_blank">{{item.data.website}}</a></td>
          </tr>
        </tbody>
      </table>      
    </div>

  </div>

</template>

    <script>
    export default {
        data: function() {
            return {
              item:{},
              detailList:[],
              favorited: false,
              loadingDetail: true
            };
        },
        created(){
favorited
        },
        mounted() {

            console.log('Item Detail Component mounted.');
            this.fetchItemDetail(this.$route.params.id, this.$route.params.type);
            // this.isAuthenticated = this.$auth.isAuthenticated();
            this.fetchFavorite(this.$route.params.id);
            this.fetchComments(this.$route.params.id);


        }
    }
    </script>

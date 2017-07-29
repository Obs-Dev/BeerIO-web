<template>
    <div class="items">
      <div>

        <div class="col-md-3">
          <h4>Criteria</h4>
          <h5>Types</h5>

          <div class="checkbox">
            <label><input v-model="types"  type="checkbox" value="beer">Beer</label>
          </div>
          <div class="checkbox">
            <label><input v-model="types"  type="checkbox" value="brewery">Brewery</label>
          </div>
          <div class="checkbox">
            <label><input v-model="types"  type="checkbox" value="guild">Guild</label>
          </div>
          <div class="checkbox">
            <label><input v-model="types"  type="checkbox" value="event">Event</label>
          </div>


        </div>

        <div class="col-md-9">
        <h4>Search Items</h4>

        <form @submit="search">
        
          <div class="input-group">
            <input v-model="term" type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
              <button  class="btn btn-default" type="submit">Search!</button>
            </span>
          </div>

        </form>


          <span v-if="loadingList">
            <div class="progress">
              <div class="progress-bar progress-bar-striped active" role="progressbar"
              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                Loading...
              </div>
            </div>
          </span>
          <span v-else-if="!list.data">
            Nothing Found!
          </span>

            <div class="col-md-12" v-for="item in list.data" style="margin-top:30px">
            <div class="col-md-3">
              <span v-if="item.labels">
                <img class="list-image" :src="item.labels.medium" />
              </span>
              <span v-else>
                <img class="list-image" src="https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png" />
              </span>
            </div>
            <div class="col-md-9">
            <h4 class="list-group-item-heading">
              <span v-if="item.nameDisplay">
                  {{item.nameDisplay}}
                </span>
                <span v-else>
                  {{item.name}}
                </span> 
              
              <span v-show="item.status=='verified'" class="label label-success">{{item.statusDisplay}}</span>
              <span v-show="item.status=='update_pending'" class="label label-warning">{{item.statusDisplay}}</span>
              <span v-show="item.status=='delete_pending'" class="label label-danger">{{item.statusDisplay}}</span>
            </h4>
            <div>
              <span v-if="item.style">
                {{item.style.name}}<br />
              </span>

              <p>Type: {{item.type}}</p>
              <p>{{item.description}}</p>
            </div>
            <router-link class="btn btn-primary" :to="{ name: 'item', params: { type: item.type,id: item.id }}">View Details</router-link>
            </div>
            <hr />
            </div>



        </div>
      </div>
    </div>
</template>

    <script>
    export default {
        data: function() {
            return {
                list: [],
                term:'',
                loadingList:true,
                types:[]
            };
        },
        mounted() {

            console.log('Item List Component mounted.');
            this.term = this.$route.query.q;
            this.fetchList(this.term);
            this.fetchFavorite();

        },
        methods: {
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
          fetchFavorite: function() {

              this.$http.get('/api/v1/favorite')
                  .then((response) => {

                      console.log(response);
                  })
                  .catch((error) => {
                      console.log(error);
                  });

          },
        }
    }
    </script>

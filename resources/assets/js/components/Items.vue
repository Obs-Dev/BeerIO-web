<template>
    <div class="items">
      <div>

        <div class="col-md-3">
          <h4>Criteria</h4>
          <h5>Types</h5>

          <label class="mdl-checkbox mdl-js-checkbox" for="beer">
            <input v-model="types" type="checkbox" id="beer" class="mdl-checkbox__input" value="beer" checked>
            <span class="mdl-checkbox__label">Beer</span>
         </label>
         <label class="mdl-checkbox mdl-js-checkbox" for="brewery">
           <input v-model="types" type="checkbox" id="brewery" class="mdl-checkbox__input" value="brewery" checked>
           <span class="mdl-checkbox__label">Brewery</span>
        </label>
        <label class="mdl-checkbox mdl-js-checkbox" for="guild">
          <input v-model="types" type="checkbox" id="guild" class="mdl-checkbox__input" value="guild" checked>
          <span class="mdl-checkbox__label">Guild</span>
       </label>
       <label class="mdl-checkbox mdl-js-checkbox" for="event">
         <input v-model="types" type="checkbox" id="event" class="mdl-checkbox__input" value="event" checked>
         <span class="mdl-checkbox__label">Event</span>
      </label>

        </div>

        <div class="col-md-9">
        <h4>Search Items</h4>

        <form @submit="search">

            <md-input-container md-inline>
              <label>Search</label>
              <md-input v-model="term"></md-input>
            </md-input-container>
          <!--<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" v-model="term" id="search-text"/>
            <label class="mdl-textfield__label" for="search-text">Search:</label>
          </div>-->
        </form>

        <ul class = "list-group">
          <span v-if="loadingList">
            <div class="mdl-spinner mdl-js-spinner is-active"></div>
          </span>
          <span v-else-if="!list.data">
            Nothing Found!
          </span>
          <li class = "list-group-item" v-for="item in list.data">

            <!--<button @click = "showTask(item.id)" class = "btn btn-primary btn-xs">Edit</button>-->
            <!--<button @click = "deleteTask(item.id)"class = "btn btn-danger btn-xs">Delete</button>-->
            <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">

                <span v-if="item.labels">
                  <img class="list-image" :src="item.labels.medium" />
                </span>
                <span v-else>
                  <img class="list-image" src="https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png" />
                </span>
              <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                <div class="mdl-card__supporting-text">
                  <h4>
                    <span v-if="item.nameDisplay">
                      {{item.nameDisplay}}
                    </span>
                    <span v-else>
                      {{item.name}}
                    </span>
                  </h4>
                  {{item.description}}test
                </div>
                <div class="mdl-card__actions">
                  <router-link class="mdl-button" :to="{ name: 'item', params: { type: item.type,id: item.id }}">View Details</router-link>
                </div>
              </div>
              <!--<button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons">more_vert</i>
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
              <div class="mdl-menu__container is-upgraded"><div class="mdl-menu__outline mdl-menu--bottom-right"></div><ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1" data-upgraded=",MaterialMenu">
                <li class="mdl-menu__item" tabindex="-1">Lorem</li>
                <li class="mdl-menu__item" disabled="" tabindex="-1">Ipsum</li>
                <li class="mdl-menu__item" tabindex="-1">Dolor</li>
              </ul></div>-->
            </section>
          </li>
        </ul>
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

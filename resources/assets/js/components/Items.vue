<template>
    <div class="items">
      <div class="mdl-grid">

        <div class="mdl-cell mdl-cell--3-col">
          <h4>Criteria</h4>
          <h5>Types</h5>
          <label class="mdl-checkbox mdl-js-checkbox" for="beer">
            <input type="checkbox" id="beer" class="mdl-checkbox__input" checked>
            <span class="mdl-checkbox__label">Beer</span>
         </label>
         <label class="mdl-checkbox mdl-js-checkbox" for="brewery">
           <input type="checkbox" id="brewery" class="mdl-checkbox__input" checked>
           <span class="mdl-checkbox__label">Brewery</span>
        </label>

        </div>
        <div class="mdl-cell mdl-cell--9-col">
        <h4>Search Items</h4>
        <form @submit="search">
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="text" v-model="term" id="search-text"/>
            <label class="mdl-textfield__label" for="search-text">Search:</label>
          </div>
        </form>
        <ul class = "list-group">
          <span v-if="!list.data">
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
                  <h4>{{item.nameDisplay}}</h4>
                  {{item.description}}
                </div>
                <div class="mdl-card__actions">
                  <a href="#" class="mdl-button">Read more</a>
                </div>
              </div>
              <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1" data-upgraded=",MaterialButton,MaterialRipple">
                <i class="material-icons">more_vert</i>
              <span class="mdl-button__ripple-container"><span class="mdl-ripple"></span></span></button>
              <div class="mdl-menu__container is-upgraded"><div class="mdl-menu__outline mdl-menu--bottom-right"></div><ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="btn1" data-upgraded=",MaterialMenu">
                <li class="mdl-menu__item" tabindex="-1">Lorem</li>
                <li class="mdl-menu__item" disabled="" tabindex="-1">Ipsum</li>
                <li class="mdl-menu__item" tabindex="-1">Dolor</li>
              </ul></div>
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
                term:''
            };
        },
        mounted() {
            console.log('Item List Component mounted.');
            this.term = this.$route.query.q;
            this.fetchList(this.term);
        },
        methods: {
          fetchList: function(q) {
              axios.get('/api/v1/search?q='+q)
                  .then((response) => {
                      console.log(response.data);
                      this.list = response.data;
                  })
                  .catch((error) => {
                      console.log(error);
                  });
          },
          search: function(event) {
            event.preventDefault();
            this.fetchList(this.term);
          }
        }
    }
    </script>

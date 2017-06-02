<template>
  <div>
    <div class="col-md-3">

    </div>
    <div class="col-md-9">
      <form @submit="search">

          <md-input-container md-inline>
            <label>Search</label>
            <md-input v-on:click="search" v-model="term"></md-input>
          </md-input-container>

      </form>
      <div class="col-md-12">
        <span v-if="users.length == 0">
          No users found. Try another search term.
        </span>
        <md-card md-with-hover v-for="user in users" v-bind:key="user.email" >
          <md-card-header>
            <md-avatar>

              <span v-if="user.image">
                <img :src="user.image" :alt="user.name">
              </span>
              <span v-else>
                <img src="http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png" :alt="user.name">
              </span>
            </md-avatar>

            <div class="md-title">{{user.name}}</div>
            <div class="md-subhead">{{user.email}}</div>
          </md-card-header>


          <md-card-content>
            <span v-if="user.bio">
              {{user.bio}}
            </span>
            <span v-else>
              This user has no bio
            </span>

          </md-card-content>

          <md-card-actions>
            <md-button>Follow</md-button>
            <md-button>View Profile</md-button>
          </md-card-actions>
        </md-card>

      </div>
    </div>
  </div>
</template>
<script>
export default {
    data: function() {
        return {

            loadingDetail:true,
            users:[],
            term:""
        };
    },
    mounted() {

        console.log('People Component mounted.');

    },
    watch: {
      // whenever question changes, this function will run
      term: function (val) {
        this.fetchUsers(this.term);
      }
    },
    methods: {
      search: function(event) {
        event.preventDefault();
        this.fetchUsers(this.term);
      },

    }
}
</script>

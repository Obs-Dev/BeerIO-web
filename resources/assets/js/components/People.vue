<template>
  <div class="container">

    <div class="col-md-12">
      <form @submit="search">
          <div class="form-group">
              <label for="name">Search:</label>
              <input v-on:change="search" v-model="term" type="text" class="form-control" id="term">
           </div>
      </form>
      <span v-if="users.length == 0">
          No users found. Try another search term.
      </span>
      <ul class="media-list">
        <li v-for="user in users" v-bind:key="user.email" class="media">
        <router-link :to="{ name: 'profileId', params: { id: user.id }}" >
          <div class="media-left">
            
              <span v-if="user.image">
                <img :src="user.image" :alt="user.name">
              </span>
              <span v-else>
                <img src="http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png" :alt="user.name">
              </span>
            
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{user.name}}</h4>
            <p>{{user.email}}</p>
            <p>{{user.bio}}</p>

          </div>
          </router-link>
        </li>
      </ul>

      
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

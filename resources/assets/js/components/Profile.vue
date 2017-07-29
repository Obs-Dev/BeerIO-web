<template>

  <div class="container">


      <div >

          <span v-if="loadingDetail">
            <div class="progress">
              <div class="progress-bar progress-bar-striped active" role="progressbar"
              aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width:100%">
                Loading...
              </div>
            </div>
          </span>
          <div class="col-md-12">
            <div class="col-md-3">
              <span v-if="this.user.image">
                  <img :src="this.user.image" style="max-width:100%;"/>
                </span>
                <span v-else>
                  <img src="http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png" style="max-width:100%;"/>
                </span>
            </div>
            <div class="col-md-9">
                
                <h4 v-show="!isEditing">{{this.user.name}}</h4>
                  <div v-show="isEditing" class="form-group">
                    <label for="name">Name:</label>
                    <input v-model="user.name" type="text" class="form-control" id="name">
                  </div>

                  <p v-show="!isEditing"><i>Member Since:</i> {{this.user.created_at}}</p>
                  <p v-show="!isEditing"><i>Bio:</i> {{this.user.bio}}</p>
                  <div v-show="isEditing" class="form-group">
                    <label for="name">Bio:</label>
                    <input v-model="user.bio" type="text" class="form-control" id="bio">
                  </div>
                  <div v-show="editable">
                  <button v-show="!isEditing" v-on:click="editProfile()"class="btn btn-primary"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit</button>
                  <button v-show="isEditing" v-on:click="saveProfile()"class="btn btn-success"><span class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span> Save</button>
                </div>
            </div>
            
          </div>
          <div class="col-md-12">
            <h3>Recently Liked</h3>
            <div class="list-group">

              <div class="list-group-item clearfix" v-for="individualItem in detailList">
                <div class="col-md-2" v-if="individualItem.data.labels">
                  <img style="max-width:30%" :src="individualItem.data.labels.medium" />
                </div>
                <div class="col-md-2" v-else>
                  <img style="max-width:30%" src="https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png" />
                </div>
                <div class="col-md-10">
                <h4>{{ individualItem.data.name }}</h4>
                <small>Liked on: {{ individualItem.data.favorited | formatDate(individualItem.data.favorited)  }}</small>
                <span class="pull-right">
                  <router-link :to="{ name: 'item', params: { type: individualItem.data.type,id: individualItem.data.id }}" class="btn btn-primary">View</router-link>
                </span>
                </div>

              </div>
            </div>
            

          </div>





      </div>

    <div class="mdl-layout-spacer"></div>

  </div>

</template>

    <script>
    export default {
        data: function() {
            return {

                loadingDetail:true,
                user: {},
                favorites:[],
                item: {},
                detailList: [],
                loadingDetailList: false,
                isEditing: false,
                editable: false,
                updateUserError: false
            };
        },
        created(){

        },
        mounted() {

            console.log('Account Component mounted.');
            this.loadingDetail = false;

            if(this.$route.params.id){
              this.fetchUser(this.$route.params.id);
              this.fetchFavorites(this.$route.params.id);
            }else{

              this.fetchUser();
              this.fetchFavorites();
            }

            

        },
        methods:{
          editProfile(){

            this.isEditing = !this.isEditing;
          },
          saveProfile(){
            var user = {
              name:this.user.name,
              bio:this.user.bio,
              id: this.user.id
            }
            this.updateUser(user);
            if(!this.updateUserError)
              this.isEditing = !this.isEditing;
          }
        },

    }
    </script>

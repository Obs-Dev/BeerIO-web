<template>

  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>

      <div class="mdl-cell mdl-cell--8-col content mdl-color-text--grey-800">
          <md-button v-show="!isEditing" @click.native="editProfile()"class="md-primary"><md-icon>edit</md-icon> Edit Profile</md-button>
          <md-button v-show="isEditing" @click.native="saveProfile()"class="md-primary"><md-icon>save</md-icon> Save Profile</md-button>
          <div v-show="loadingDetail" class="mdl-spinner mdl-js-spinner is-active"></div>
          <div class="mdl-cell mdl-cell--8-col content mdl-color-text--grey-800">
            <div class="mdl-grid">
              <div class="mdl-cell">
                <span v-if="this.user.image">
                  <img :src="this.user.image" style="max-width:100%;"/>
                </span>
                <span v-else>
                  <img src="http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png" style="max-width:100%;"/>
                </span>
              </div>
              <div class="mdl-cell">
                  <h4 v-show="!isEditing">{{this.user.name}}</h4>
                  <md-input-container  v-show="isEditing" md-inline>
                    <label>Name</label>
                    <md-textarea v-model="user.name"></md-textarea>
                  </md-input-container>
                  <p v-show="!isEditing"><i>Member Since:</i> {{this.user.created_at}}</p>
                  <p v-show="!isEditing"><i>Bio:</i> {{this.user.bio}}</p>
                  <md-input-container  v-show="isEditing" md-inline>
                    <label>Bio</label>
                    <md-textarea v-model="user.bio"></md-textarea>
                  </md-input-container>

              </div>
            </div>
            <h4>Recently Liked</h4>
            <div class="mdl-grid">

              <div v-for="individualItem in detailList" class="mdl-card mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-shadow--2dp">
                <figure class="mdl-card__media" v-if="individualItem.data.labels">
                  <img   :src="individualItem.data.labels.medium" />
                </figure>
                <figure class="mdl-card__media" v-else>
                  <img   src="https://www.crafthounds.com/wp-content/uploads/2016/11/No-Image-Available.png" />
                </figure>

                <div class="mdl-card__title">
                  <h1 class="mdl-card__title-text">{{ individualItem.data.name }}</h1>
                </div>
                <div class="mdl-card__supporting-text">
                  <p>Liked on: {{ individualItem.data.favorited | formatDate(individualItem.data.favorited)  }}</p>
                </div>
                <div class="mdl-card__actions mdl-card--border">

                  <router-link :to="{ name: 'item', params: { type: individualItem.data.type,id: individualItem.data.id }}" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Read More</router-link>
                  <div class="mdl-layout-spacer"></div>
                  <!--<button class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">favorite</i></button>
                  <router-link :to="{ name: 'item', params: { type: individualItem.data.type,id: individualItem.data.id }}" class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">share</i></router-link>-->

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
                updateUserError: false
            };
        },
        created(){

        },
        mounted() {

            console.log('Account Component mounted.');
            this.loadingDetail = false;
            this.fetchUser();
            this.fetchFavorites();

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

<template>

  <div class="mdl-grid">
    <div class="mdl-layout-spacer"></div>

      <div class="mdl-cell mdl-cell--8-col content mdl-color-text--grey-800">

          <div v-show="loadingDetail" class="mdl-spinner mdl-js-spinner is-active"></div>
          <span v-if="this.user">
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
                  <h4>{{this.user.name}}</h4>
                  <p><i>Member Since:</i> {{this.user.created_at}}</p>
                  <p><i>Bio:</i> {{this.user.bio}}</p>

              </div>
            </div>
            <h4>Recently Liked</h4>
            <div class="mdl-grid">

              <div v-for="individualItem in detailList" class="mdl-card mdl-cell mdl-cell--3-col mdl-cell--6-col-tablet mdl-shadow--2dp">
                <figure class="mdl-card__media">
                  <img  :src="individualItem.data.labels.medium" />
                </figure>
                <div class="mdl-card__title">
                  <h1 class="mdl-card__title-text">{{ individualItem.data.name }}</h1>
                </div>
                <div class="mdl-card__supporting-text">
                  <p>Liked on: {{ individualItem.data.favorited | formatDate(individualItem.data.favorited)  }}</p>
                </div>
                <div class="mdl-card__actions mdl-card--border">

                  <router-link to="/test" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Read More</router-link>
                  <div class="mdl-layout-spacer"></div>
                  <!--<button class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">favorite</i></button>-->
                  <router-link to="/test" class="mdl-button mdl-button--icon mdl-button--colored"><i class="material-icons">share</i></router-link>

                </div>
              </div>
            </div>
            <div class="mdl-grid">
              <div class="mdl-cell">
                <h4>Following</h4>

              </div>
              <div class="mdl-cell">
                <h4>Recently Liked</h4>
                <div v-show="loadingDetailList" class="mdl-spinner mdl-js-spinner is-active"></div>
                <ul class="mdl-list recently-liked-list">
                <li v-for="individualItem in detailList" class="mdl-list__item mdl-list__item--three-line">
                  <span class="mdl-list__item-primary-content">
                    <img style="max-width:50px;" :src="individualItem.data.labels.medium" />
                    <span>{{ individualItem.data.name }}</span>
                    <span class="mdl-list__item-text-body">
                      {{ individualItem.data.favorited }}
                    </span>
                  </span>
                </li>
              </ul>

              </div>
            </div>
          </span>




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
                loadingDetailList: false
            };
        },
        created(){

        },
        mounted() {

            console.log('Account Component mounted.');
            this.loadingDetail = false;
            this.fetchUser();
            this.fetchFavorites();

        }
    }
    </script>

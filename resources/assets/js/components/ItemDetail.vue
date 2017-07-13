<template>


  <div class="mdl-grid">


    <div class="mdl-layout-spacer"></div>

      <div class="mdl-cell mdl-cell--8-col content mdl-color-text--grey-800">

        <div v-show="loadingDetail" class="mdl-spinner mdl-js-spinner is-active"></div>

        <span v-if="item.data">
          <div class="mdl-layout__tab-panel is-active content-panel" id="overview">
                    <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white">
                        <span v-if="item.data.labels">
                          <img class="list-image" :src="item.data.labels.medium" style="max-width:100%;" />
                        </span>
                        <span v-if="item.data.images">
                          <img class="list-image" :src="item.data.images.large" style="max-width:100%;" />
                        </span>
                      </header>
                      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                        <div class="mdl-card__supporting-text">
                          <h4>{{item.data.name}}<small>
                          <span v-if="item.data.abv">
                            ({{item.data.abv}}%)
                          </span>
                          <span v-if="item.data.established">
                            (EST. {{item.data.established}})
                          </span>
                          </small>
                          </h4>

                          {{item.data.description}}<br /><br />

                          <span v-if="this.$auth.isAuthenticated()">
                            <span v-if="this.favorited">
                              <button @click = "handleFavorite(item.data.id, $route.params.type)" class="mdl-button mdl-button--colored mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                                <i class="material-icons">done</i> Liked
                              </button>
                            </span>
                            <span v-else-if="!this.favorited">
                              <button @click = "handleFavorite(item.data.id, $route.params.type)" class="mdl-button mdl-js-button mdl-js-ripple-effect ">
                                <i class="material-icons">star</i> Like
                              </button>
                            </span>
                          </span>


                        </div>

                      </div>

                    </section>
                  </div>
                  <div class="mdl-layout__tab-panel is-active content-panel" id="details">
                            <section class="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
                              <div class="mdl-card mdl-cell mdl-cell--12-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone">
                                <div class="mdl-card__supporting-text">
                                  <h4>Details</h4>
                                  <table class="mdl-data-table mdl-js-data-table">
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
                                      <tr>
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


                                  <span v-if="item.data.style">
                                    <h4>Style</h4>
                                    <strong>{{item.data.style.name}}</strong><br /><br />
                                    {{item.data.style.description}}
                                  </span>
                                    <span v-if="item.data.available">
                                    <h4>Availablility</h4>
                                    {{item.data.available.description}}
                                  </span>
                                  <ul></ul>
                                </div>
                                <!--<div class="mdl-card__actions">
                                  <a href="#" class="mdl-button">Read our features</a>
                                </div>-->
                              </div>
                            </section>
                          </div>
                          <h4>Comments</h4>

                              <md-input-container>
                                <label>New Comment</label>
                                <md-textarea v-model="newComment" maxlength="120"></md-textarea>
                              </md-input-container>
                              <md-button @click.native="addComment(item.data.id)" class="md-raised md-primary">
                                <md-icon>add</md-icon>  Add Comment
                              </md-button>



                          <div v-for="comment in comments">
                            <div class="phone-viewport">
                              <md-list class="custom-list md-triple-line">
                                <md-list-item>
                                  <md-avatar>
                                    <span v-if="comment.user.image">
                                      <img :src="comment.user.image" :alt="comment.user.name">
                                    </span>
                                    <span v-else>
                                      <img src="http://smtp.icimod.org/girc/dmis/img/user-avatar-placeholder.png" :alt="comment.user.name">
                                    </span>
                                    <md-tooltip md-direction="top">{{comment.user.name}}</md-tooltip>
                                  </md-avatar>

                                  <div class="md-list-text-container">
                                    <span>{{comment.user.name}} - <small>{{comment.created_at}}</small></span>
                                    <p>{{comment.description}}</p>
                                  </div>

                                  <!--<md-button class="md-icon-button md-list-action">
                                    <md-icon class="md-primary">star</md-icon>
                                  </md-button>-->

                                  <md-divider class="md-inset"></md-divider>
                                </md-list-item>


                              </md-list>



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
                item: {},
                id:-2,
                loadingDetail:true,
                isAuthenticated: false,
                favorited: false,
                message: 'item detail',
                comments: [],
                newComment: ""
            };
        },
        created(){

        },
        mounted() {

            console.log('Item Detail Component mounted.');
            this.fetchItemDetail(this.$route.params.id, this.$route.params.type);
            this.isAuthenticated = this.$auth.isAuthenticated();
            this.fetchFavorite(this.$route.params.id);
            this.fetchComments(this.$route.params.id);


        }
    }
    </script>
